import {useState, useEffect} from 'react'
import Ref from './ref'
import useObjectMonitor from './useObjectMonitor'

const DEFAULT_OPTIONS = {
  path: [],
  enabled: true,
  createFunction: null,
  createParams: [],
}

function getOptions(raw = {}) {
  return {
    ...DEFAULT_OPTIONS,
    ...raw,
  }
}


function useObjectDb(rawOptions) {
  const options = getOptions(rawOptions)

  const [ref, updateRef] = useState(new Ref(options.path))

  let object = useObjectMonitor(ref, {enabled: options.enabled})

  if(object === null && !!options.createFunction) {
    object = options.createFunction(...options.createParams)
  }

  return object
}

export default useObjectDb