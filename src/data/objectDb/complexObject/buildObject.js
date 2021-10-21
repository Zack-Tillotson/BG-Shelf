import walkObject, {setChildPath} from '../util/walkObject'
import Ref from '../ref'
import {getObjectOfType} from '../../objectCreator'


// 1. get the object at ref
// 2. Check attributes for refs
// 3. For each ref, recursively get the object then replace attribute with it

class RefErrors extends Error {
  constructor(refs, promise) {
    super('Object not in objectList')

    this.refs = refs
    this.promise = promise
  }
}

function makeCleanObject(obj, ref) {
  
  const objectType = getObjectOfType(ref.collection)
  const ret = objectType.fromDb(ref.doc, obj) // TODO identify object type, create object from obj

  // const ret = {ref, id: ref.doc} 

  Object.keys(obj).forEach(key => {
    const value = obj[key]
    if(value instanceof Ref) {
      ret[key] = value
    } else if(value instanceof Array) {
      ret[key] = [...value]
    } else if(value instanceof Object) {
      ret[key] = {...value}
    }
  })
  return ret
}

function buildObject(get, ref, seenObjects = []) {
  const objRef = get(ref)
  if(!objRef || !objRef.loaded) {
    throw new RefErrors([ref], objRef ? objRef.promise : null)
  }

  if(!objRef.object) {
    return objRef.object
  }

  const seenObject = seenObjects.find(target => ref.equals(target.ref))
  if(seenObject) {
    return seenObject
  }

  const cleanObj = makeCleanObject(objRef.object, ref)
  seenObjects.push(cleanObj)

  const refErrors = []
  let loadingPromise = null

  walkObject(objRef.object, (child, path) => {
    try {
      const subObject = buildObject(get, child, seenObjects)
      if(subObject) { // null means it's already been set (recursive reference)
        setChildPath(cleanObj, path, subObject)
      }
    } catch(e) {
      if(e.refs) {
        refErrors.push(...e.refs)
        loadingPromise = loadingPromise || e.promise
      } else {
        throw e
      }
    }
  })

  if(refErrors.length) {
    throw new RefErrors(refErrors, loadingPromise)
  }

  return cleanObj
}

export default buildObject