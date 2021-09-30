import debugObject from '../debug'
import walkObject, { setChildPath } from '../util/walkObject'
import refMonitor from './refMonitor'

const context = {
  pubSub: null,
} // deps

const objectPromises = new Map()
debugObject('objectList.objectPromises', objectPromises)

function get(ref) {
  return objectPromises.get(ref.toString())
}

function set(ref, value) {
  return objectPromises.set(ref.toString(), value)
}

function initialize(db, pubSub) {
  context.pubSub = pubSub

  refMonitor.initialize(db, handleDataUpdate)
}

function watch(ref) {
  const isNewRef = refMonitor.add(ref)

  if(isNewRef) {
    let resolve = null, reject = null
    const promise = new Promise((good, bad) => {
      resolve = good
      reject = bad
    })
    set(ref, {promise, resolve, reject, object: null, loaded: false})
  }

  return get(ref).promise
}

function handleDataUpdate(update, ref) {
  const {resolve, reject, promise, object, loaded} = get(ref)

  resolve()

  set(ref, {promise, resolve, reject, object: update, loaded: true})
  context.pubSub.publish(ref, update)
}

function put(...objects) {
  const dbObjects = objects.forEach(object => refMonitor.put(object))
  return dbObjects
}

export {initialize, watch, get, put}