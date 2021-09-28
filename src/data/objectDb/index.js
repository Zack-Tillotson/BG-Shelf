/*
 */

import objectList from './objectList'
import complexObject from './complexObject'
import Ref from './ref'

import pubSub from './pubSub'

function initialize(db) {
  objectList.initialize(db, pubSub)
  complexObject.initialize(objectList)
}

function watch(refParam, callback) {

  let ref = refParam
  if(typeof ref === 'string') {
    ref = new Ref(refParam)
  }

  const unsub = pubSub.subscribe(ref, (callbackRef, object) => {
    try {
      const fullObject = complexObject.get(ref)
      callback(fullObject, ref)
    } catch(e) {
      if(e.refs) {
        e.refs.forEach(ref => objectList.watch(ref))
      } else {
        throw e
      }
    }
  })

  objectList.watch(ref)

  return unsub
}

export default {
  initialize,
  watch,
}