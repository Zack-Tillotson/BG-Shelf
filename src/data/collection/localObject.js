/*
 * This module is the main interface to interact with the 
 * local cache of the firebase database objects.
 */
import deepmerge from 'deepmerge'

import collectionStore from './store'
import fbObject from './fbObject'
import {objectSelector} from './state/selector'

const OBJECT_REF_HEAD = 'ref.'
const isRef = target => target instanceof String && target.startsWith(OBJECT_REF_HEAD)
function buildRef(object) {
  const {type, id} = object
  if(!type || !id) {
    throw new Error('Unable to build ref for object, type or id missing')
  }
  return `${OBJECT_REF_HEAD}${type}.${id}`
}

function requestObjectRefs(object) {
  if(!object) return []

  let promises = []

  const {id: ignoreId, type: ignoreType, attributes, ...rest} = object
  forEachChildFlat(rest, child => {
    if(!isRef(child)) {
      return
    }
    const [_, type, id] = child.split('.')
    promises.push(monitor(type, id).promise)
  })

  return promises
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
  forEachChildFlat(rest, (child, childPath) => walkObjectDeep(child, onChild, [...path, ...childPath], seenObjs))

  onChild(object, path)
}

// Invokes onChild for each attribute, or for each array item if the attribute is an Array
function forEachChildFlat(children, onChild) {
  Object.keys(children).forEach(key => {
    const child = children[key]
    if(child instanceof Array) {
      child.forEach((subChild, index) => onChild(subChild, [key, index]))
    } else {
      onChild(child, [key])
    }
  })
}


// Start watching objects at the given path and returns an unsubscribe function
const objectsMonitored = {}
window.__objects_monitored__ = objectsMonitored

function monitor(type, id) {

  if(objectsMonitored[`${type}.${id}`]) {
    return
  }

  objectsMonitored[`${type}.${id}`] = true

  let promiseResolve = () => {}
  let promise = new Promise(resolve => promiseResolve = resolve)
  collectionStore.dataReceived(type, id, promise) // For suspense

  const fbUnsubscribe = fbObject.read(type, id, data => {
    collectionStore.dataReceived(type, id, data) // Need to put undefined objects in store

    // Resolve data promise if all children are loaded
    const fullObject = buildComplexObject(type, id)
    if(fullObject instanceof Promise) {
      return
    }
    promiseResolve(data)
  })

  const unsubscribe = () => {
    fbUnsubscribe()
    delete objectsMonitored[`${type}.${id}`]
  }

  return {unsubscribe, promise}
}

// Return the given object, with all children resolved to their respective object values. If
// the object or any child is not yet resolved return the promise for that object
function buildComplexObject(type, id) {
  const state = collectionStore.get()
  const object = objectSelector(type, id, state)
  if(!object) {
    return undefined
  }

  let complexObject = deepmerge({}, object)
  let loadingPromise = null

  walkObjectDeep(object, (child, path) => {
    if(loadingPromise) return

    if(isRef(child)) {
      const [refStr, type, id] = child.split('.')
      const child = objectSelector(type, id, state)
      if(child instanceof Promise) {
        loadingPromise = child
      } else {
        const attrName = path.pop()
        const target = path.reduce((soFar, piece) => soFar[piece], complexObject)

        target[attrName] = child
      }
    }
  })
  if(loadingPromise) {
    return loadingPromise
  }

  return complexObject
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
    walkObjectDeep(object, childObj => {
      const {id, type, attributes, ...rest} = childObj
      const cleanObj = {id, type, attributes}

      forEachChildFlat(rest, (child, childPath) => {
        if(!child instanceof Object) {
          throw new Error('Object found with non-standard shape')
        }
        const lastStep = childPath.pop()
        const objRef = childPath.reduce((target, step) => {
          if(!target[step]) target[step] = {}
          return target[step]
        }, cleanObj)
        objRef[lastStep] = buildRef(child)
      })
      fbObject.upsert(cleanObj)
    })
  })
}

export default {
  monitor,
  create,
}