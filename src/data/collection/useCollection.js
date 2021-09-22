/*
 * This module is the main interface to tie React components
 * to the store.
 */

import {useState, useEffect, useDebugValue} from 'react'

import localObject from './localObject'
import useObjectMonitor from './useObjectMonitor'

import {isObjectExist} from './object'

const DEFAULT_OPTIONS = {
  createOnNull: false,
  enabled: true,
  createFunction: () => ({})
}

function getOptions(raw = {}) {
  return {
    ...DEFAULT_OPTIONS,
    ...raw,
  }
}

function useCollection(path, rawOptions) {
  const options = getOptions(rawOptions)

  const object = useObjectMonitor(path, options.enabled)

  useDebugValue(`${path.join(',')} ${JSON.stringify(options)}`)

  useEffect(() => {
    if(!options.enabled) return

    if(!object.isRequested()) {
      localObject.monitor(...path)
      return
    }
    
    if(!object.isReady()) { // Not in the DB
      if(options.createOnNull){
        localObject.create(options.createFunction())
      }
      return
    }
  }, [...path, object.raw, options.enabled])

  return object
}

export default useCollection