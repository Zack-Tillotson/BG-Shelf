import walkObject, {IS_OBJ, IS_REF, NO_FILTER, setChildPath} from '../util/walkObject'
import Ref from '../ref'

function normalizeObject(target) {
  const objects = [target]

  walkObject(target, child => {
    objects.push(child)
  }, {
    filter: IS_OBJ,
    recurse: true,
  })

  // We're modifying the parameter object. I think that's ok, but TBD
  const normalObjs = objects.map(object => {
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