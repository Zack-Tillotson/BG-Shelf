/*
 */

import objectList from './objectList'
import complexObject from './complexObject'
import Ref from './ref'

import pubSub from './pubSub'

const NOOP = () => {}

function initialize(db) {
  objectList.initialize(db, pubSub)
  complexObject.initialize(objectList)
}

function get(refParam) {
  let ref = refParam
  if(!(ref instanceof Ref)) {
    ref = new Ref(refParam)
  }

  try {
    return complexObject.get(ref)
  }catch(e) {}

  return undefined
}

function watch(refParam, onData = NOOP, onLoading = NOOP) {

  let ref = refParam
  if(!(ref instanceof Ref)) {
    ref = new Ref(refParam)
  }

  // Get ready to invoke callbacks as needed when data changes
  const unsub = pubSub.subscribe(ref, () => {
    try {
      const fullObject = complexObject.get(ref)
      onData(fullObject, ref)
    } catch(e) {
      if(e.refs) {
        e.refs.forEach(ref => objectList.watch(ref))
        onLoading(e.promise)
      } else {
        throw e
      }
    }
  })

  // Add object Ref to list of monitored objects
  objectList.watch(ref)

  return unsub
}

function update(object) {
  const normalizedObjects = complexObject.normalize(object)
  objectList.put(...normalizedObjects)

  // Return a reference to the original object (the first item)
  return normalizedObjects.unshift().ref
}

export default {
  initialize,
  get,
  watch,
  update,
}