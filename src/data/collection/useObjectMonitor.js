/*
 * This module is the main interface to tie React components
 * to the store.
 */

import {useState, useEffect, useDebugValue} from 'react'

import CollectionObject from './object/collectionObject'
import store from './store'

function useObjectMonitor(path, enabled) {
  const [state, updateData] = useState(store.get())

  useEffect(() => {
    return store.listen(() => {
      updateData(store.get())
    })
  }, [])

  // null means not in the DB. A promise means its being fetched. An object is the data.
  let object = undefined

  try {
    object = path.reduce((soFar, piece) => soFar[piece], state.objects)
  } catch(e) {}

  useDebugValue(`${path.join('.')} enabled: ${enabled} = ${JSON.stringify(object)}`)

  if(!enabled) return new CollectionObject()

  // React dev tools and Suspense
  const isPromise = object instanceof Promise
  if(isPromise) {
    throw object
  }

  return new CollectionObject(object)
}

export default useObjectMonitor