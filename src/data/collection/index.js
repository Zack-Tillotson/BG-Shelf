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

import collectionStore from './store'
import object from './object'

function loadItemShapes() {
  
  const shapePromise = new Promise(resolve => {
    const type = 'itemshapes'
    object.read(type, null, data => {
      collectionStore.dataReceived(type, null, data)
      resolve(data)
    })
  })
  // const collectionPromise = new Promise(resolve => {
  //   awaitUser()
  //     .then(user => {
  //       getDb()
  //         .ref(`users/${user.uid}/items`)
  //         .on('value', snapshot => {
  //             const itemsObj = snapshot.val() || {}
  //             const items = Object.keys(itemsObj).map(id => {
  //               const purchases = Object.keys(itemsObj[id].purchases || {}).reduce((purchases, key) => [...purchases, {id: key, ...itemsObj[id].purchases[key]}], [])
  //               const sessions = Object.keys(itemsObj[id].sessions || {}).reduce((sessions, key) => [...sessions, {id: key, ...itemsObj[id].sessions[key]}], [])
  //               return {...itemsObj[id], id, purchases, sessions}
  //             })
  //             getStore().dispatch(actions.dataLoaded({id: 'items', data: items}))
  //             resolve(items)
  //           })
  //         })
  //     })

  // return Promise
  //   .all([shapePromise, collectionPromise])
  //   .then(([shape, items]) => ({shape, items}))
  return shapePromise
}

function initialize(store) {
  collectionStore.initialize(store)
  object.initialize(store)

  loadItemShapes()
}

export default {
  ...object, // XXX be explicit here

  initialize,
}