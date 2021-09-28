import React, {useState, useEffect} from 'react'
import objectDb from '.'

// Hook used to connect React component to objectDb
// Params
//    ref: object reference (string or Ref)
// Errors
//    throws Promise: object is being requested
// Returns
//    object requested at given ref location

function useObject(ref) {
  const [objectOrPromise, updateState] = useState(null)

  useEffect(() => {
    return objectDb.watch(
      ref, 
      newObject => {
        updateState(newObject)
      },
      promise => {
        updateState(promise)
      })
  }, ref)

  if(objectOrPromise instanceof Promise) throw objectOrPromise

  return objectOrPromise
}

export default useObject