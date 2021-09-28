import React, {useState, useEffect} from 'react'
import objectDb from '.'

// Hook used to connect React component to objectDb
// Params
//    ref: object reference (string or Ref)
// Errors
//    throws Promise: object is being requested
// Returns
//    object requested at given ref location

const DEFAULT_OPTIONS = {
  enabled: true,
}

function getOptions(raw) {
  return {
    ...DEFAULT_OPTIONS,
    ...raw,
  }
}

function useObjectMonitor(ref, rawOptions) {

  const options = getOptions(rawOptions)

  const [objectOrPromise, updateState] = useState(null)

  useEffect(() => {
    if(!options.enabled) {
      return
    }

    return objectDb.watch(
      ref, 
      newObject => {
        updateState(newObject)
      },
      promise => {
        updateState(promise)
      })
  }, [ref, options.enabled])

  if(objectOrPromise instanceof Promise) throw objectOrPromise

  return objectOrPromise
}

export default useObjectMonitor