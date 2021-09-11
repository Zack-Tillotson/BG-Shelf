/*
 * This module is the main interface to tie React components
 * to the store.
 */

import {useState, useEffect} from 'react'

import store from './store'

export default (type, id) => {
  const [data, updateData] = useState(store.get())

  useEffect(() => {
    return store.listen(() => {
      updateData(store.get())
    })
  }, [])

  let isInitialized = false
  try {
    isInitialized = id ? !!data[type][id] : !!data[type]
  } catch(e) {}

  return {
    meta: {
      isInitialized
    },
    data,
  }
}