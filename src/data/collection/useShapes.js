
import useCollection from './useCollection'

function useShapes(objectName) {
  const collection = useCollection('itemshapes')

  if(objectName) {
    return collection[objectName]
  }

  return collection
}

export default useShapes