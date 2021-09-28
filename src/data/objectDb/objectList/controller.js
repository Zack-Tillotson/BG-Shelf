import refMonitor from './refMonitor'

const context = {
  pubSub: null,
} // deps

const objectPromises = new Map()

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
    set(ref, {promise, resolve, reject, object: null})
  }

  return get(ref).promise
}

function handleDataUpdate(update, ref) {
  const {resolve, reject, promise, object} = get(ref)

  if(update) {
    resolve()
  }

  set(ref, {promise, resolve, reject, object: update})
  context.pubSub.publish(ref, update)
}

export {initialize, watch, get}