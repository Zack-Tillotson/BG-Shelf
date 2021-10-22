import walkObject, {IS_OBJ, IS_REF, NO_FILTER, setChildPath} from '../util/walkObject'
import Ref from '../ref'

function normalizeObject(target) {
  const objects = new Map()
  objects.set(target.ref, target)

  walkObject(target, child => {
    objects.set(child.ref, child)
  }, {
    filter: IS_OBJ,
    recurse: true,
  })

  // We're modifying the parameter object. I think that's ok, but TBD
  const normalObjs = [...objects.entries].map(object => {
    const cleanObject = {}
    walkObject(object, (child, path) => {
      const newValue = IS_OBJ(child) ? child.ref : child
      setChildPath(cleanObject, path, newValue)
    }, {filter: NO_FILTER})
    return cleanObject
  })

  return normalObjs
}

export default normalizeObject