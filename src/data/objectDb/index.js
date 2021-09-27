/*
 */

import {initialize as objectListInit} from './objectList'
import pubSub from './pubSub'

function initialize(db) {
  objectListInit(db, pubSub)
}

// Whenever an object is updated, 
// 1. Check it for refs and ensure they are in the objectList
// 2. Resolve the object promise for that ref if it's not yet resolved
function handleUpdate(object, ref) {
  context.pubSub.getSubscribers().forEach(({callback, refList}) => {
    if(!refList || refList.includes(ref)) {
      callback(object, ref)
    }
  })
}

export default {
  initialize,
}