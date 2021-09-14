/*
 * This module is the main interface to tie React components
 * to the store.
 */

import {useState, useEffect, useDebugValue} from 'react'

import store from './store'

function useCollection(...path) {
  const [data, updateData] = useState(store.get())

  useEffect(() => {
    return store.listen(() => {
      updateData(store.get())
    })
  }, [])

  // null means not in the DB. A promise means its being fetched. An object is the data.
  let object = null

  try {
    object = path.reduce((soFar, piece) => soFar[piece], data)
  } catch(e) {}

  const isPromise = object instanceof Promise

  useDebugValue(`Path: ${JSON.stringify(path)}, status: ${isPromise ? 'loading' : object}`)
  if(isPromise) throw object

  return object
}

export default useCollection