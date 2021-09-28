import { useDebugValue } from 'react'
import itemshapes from './itemshapes'

function useShapes(objectName) {
  
  let value = itemshapes
  if(objectName) {
    value = itemshapes[objectName]
  }
  
  useDebugValue(`${objectName}: ${JSON.stringify(value)}`)

  return value
}

export default useShapes