/*
 * This module is the main interface to interact with the 
 * local cache of the firebase database objects.
 */

import collectionStore from './store'
import fbObject from './fbObject'

import deepmerge from 'deepmerge'

function requestObjectRefs(object) {

  const {id: ignoreId, type: ignoreType, attributes, ...rest} = object
  Object.keys(rest).forEach(key => {
    if(object[key] instanceof Array) {
      object[key].forEach((subObj, index) => {
        if(!subObj instanceof String || !subObj.startsWith('ref.')) {
          return
        }
        const [_, type, id] = subObj.split('.')
        monitor(type, id)
      })
    } else if(object[key] instanceof String && object[key].startsWith('ref.')) {
      const [_, type, id] = object[key].split('.')
      monitor(type, id)
    }
  })
}

// Start watching objects at the given path and returns an unsubscribe function
function monitor(type, id) {
  let promiseResolve = () => {}
  const dataPromise = new Promise(resolve => promiseResolve = resolve)
  collectionStore.dataReceived(type, id, dataPromise) // For suspense

  const unsub = fbObject.read(type, id, data => { // XXX unsub wont stop monitoring children for now
    if(data) {
      requestObjectRefs(data)
    }
    collectionStore.dataReceived(type, id, data)
    promiseResolve(data)
  })

  return unsub
}

// Walk the object tree, using a deep-first approach and ignoring non-object
// attributes such as "id, type, attributes". The onChild callback will be
// invoked in reverse discovery order. There is repetition detection, so the 
// function will bail on cycles.
function walkObjectDeep(object, onChild, path = [], seenObjs = []) {

  if(seenObjs.includes(object)) {
    return
  } else {
    seenObjs.push(object)
  }

  const {id, type, attributes, ...rest} = object
  Object.keys(rest).forEach(key => {
    if(object[key] instanceof Array) {
      object[key].forEach((subObj, index) => walkObjectDeep(subObj, onChild, [...path, key, index], seenObjs))
    } else if(object[key] instanceof Object) {
      walkObjectDeep(object[key], onChild, [...path, key], seenObjs)
    } else {
      throw new Error('Non standard object shape')
    }
  })
  onChild(object, path)
}

function buildRef(object) {
  const {type, id} = object
  if(!type || !id) {
    throw new Error('Unable to build ref for object, type or id missing')
  }
  return `ref.${type}.${id}`
}

// Given the rawObject, which can include references to other objects, create it 
// in the db.
// 
// eg {club: {id, attributes: {...}, members: [{id, name: 'Test Guy'}]}}
//
// 1. Walk object, create every object "base" in DB - attributes + id
// 2. Do depth first search of objects (which cycle detection)
// 3. Update each object with refs to objects
function create(object) {

  // Find all of the sub objects
  const objs = []
  walkObjectDeep(object, obj => objs.push(obj))

  return Promise.all(objs.map(baseObj => { // Ensure all of the sub objects are referencable
    const {id, type, attributes} = baseObj
    fbObject.upsert({id, type, attributes})
  })).then(() => { // Update each obj to include refs to the subobjects
    const cleanObj = deepmerge({}, object)
    walkObjectDeep(cleanObj, obj => {
      const {id, type, attributes, ...rest} = obj
      Object.keys(rest).forEach(key => {
        if(obj[key] instanceof Array) {
          obj[key] = obj[key].map(subItem => buildRef(subItem))
        } else if(obj[key] instanceof Object) {
          obj[key] = buildRef(obj[key])
        } else {
          throw new Error('Object found with non-standard shape')
        }
      })
      fbObject.upsert(obj)
    })
  })
}

export default {
  monitor,
  create,
}