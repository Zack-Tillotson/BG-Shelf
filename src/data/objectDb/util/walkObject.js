import Ref from "../ref"

export const IS_REF = item => item instanceof Ref
export const IS_OBJ = item => item instanceof Object && IS_REF(item.ref)

const DEFAULT_OPTIONS = {
  filter: IS_REF,
  path: [],
  seenObjects: [],
  recurse: false,
  depthFirst: true,
}

function getOptions(raw = {}) {
  return {
    ...DEFAULT_OPTIONS,
    ...raw,
  }
}

// Invokes onChild for each attribute, or for each array item if the attribute is an Array
function walkObject(object, onChild, rawOptions) {
  const options = getOptions(rawOptions, object)

  const doRecursion = (child, path) => {
    if(options.seenObjects.find(target => object.ref.equals(target.ref))) {
      return
    }
    options.seenObjects.push(object)
    walkObject(child, onChild, {...options, path})
  }

  const handleChild = (child, localPath) => {
    if(options.filter(child)) {
      const newPath = [...options.path, ...localPath]
      if(options.recurse && options.depthFirst && IS_OBJ(child)) {
        doRecursion(child, newPath)
      }
      onChild(child, newPath)
      if(options.recurse && !options.depthFirst && IS_OBJ(child)) {
        doRecursion(child, newPath)
      }
    }
  }

  Object.keys(object).forEach(key => {
    const child = object[key]
    if(child instanceof Array) {
      child.forEach((subChild, index) => {
        handleChild(subChild, [key, index])
      })
    } else {
      handleChild(child, [key])
    }
  })
}

export function setChildPath(object, path, value) {
  const cleanPath = [...path]
  const attrName = cleanPath.pop()
  const target = cleanPath.reduce((soFar, piece) => {
    return soFar[piece]
  }, object)
  target[attrName] = value
}

export function getChildPath(object, path) {
  return path.reduce((soFar, piece) => {
    return soFar[piece]
  }, object)
}

export default walkObject