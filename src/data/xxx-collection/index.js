/*
 * This module is the main interface to interact with database
 * collections. The data initialized and then allows consumers 
 * to understand the current collection shape and make CRUD 
 * operations on the collection items.
 * 
 * Data is accessed synchronously but in-progress operations will
 * be identifiable using the 'meta' attribute. 
 */

import 'firebase'

import localObject from './localObject'
import fbObject from './fbObject'
import collectionStore from './store'

function initialize(store) {
  collectionStore.initialize(store)
  fbObject.initialize(store)

  localObject.monitor('itemshapes')
}

export default {
  initialize,
}