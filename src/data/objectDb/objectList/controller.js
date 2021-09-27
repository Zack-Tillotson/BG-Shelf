import refMonitor from './refMonitor'

const context = {
  onChange: null,
} // deps

const objectPromises = new Map()

function initialize(db, onChange) {
  context.onChange = onChange

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
    objectPromises.set(ref, {promise, resolve, reject, object: null})
  }

  return objectPromises.get(ref.promise)
}

function handleDataUpdate(ref, update) {
  const {resolve, reject, promise, object} = objectPromises.get(ref)

  if(update) {
    resolve()
  }

  objectPromises.set(ref, {promise, resolve, reject, object: update})
  context.onChange(ref, update)
}


export {initialize, watch}