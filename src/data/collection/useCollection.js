/*
 * This module is the main interface to tie React components
 * to the store.
 */

import {useState, useEffect, useDebugValue} from 'react'

import localObject from './localObject'
import useObjectMonitor from './useObjectMonitor'

const DEFAULT_OPTIONS = {
  createOnNull: false,
  attributes: {},
}

function getOptions(raw = {}) {
  return {
    ...DEFAULT_OPTIONS,
    ...raw,
  }
}

function useCollection(path, rawOptions) {
  const data = useObjectMonitor(...path)
  const options = getOptions(rawOptions)

  useEffect(() => {
    if(data === null) { // Not yet requested
      localObject.monitor(...path)
    }
    if(data === undefined) { // Not in the DB
      if(options.createOnNull){
        localObject.create(options.obj)
      }
    }
  }, [...path, data])

  return data
}

export default useCollection