import walkObject, {IS_OBJ, setChildPath} from '../util/walkObject'
import Ref from '../ref'

function normalizeObject(target) {
  const objects = [target]

  walkObject(target, child => {
    if(!objects.find(obj => obj.ref.equals(child.ref))) {
      objects.push(child)
    }
  }, {
    filter: IS_OBJ,
    recurse: true,
  })

  // We're modifying the parameter object. I think that's ok, but TBD
  const normalObjs = objects.map(object => {
    walkObject(object, (child, path) => {
      setChildPath(object, path, child.ref)
    }, {filter: IS_OBJ})
    return object    
  })

  return normalObjs
}

export default normalizeObject