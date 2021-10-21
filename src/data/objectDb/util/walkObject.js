import Ref from "../ref"

export const IS_REF = item => item instanceof Ref
export const IS_OBJ = item => item instanceof Object && IS_REF(item.ref)
export const NO_FILTER = _ => true

const DEFAULT_OPTIONS = () => ({
  filter: IS_REF,
  path: [],
  seenObjects: [],
  childObjects: [],
  recurse: false,
  depthFirst: true,
})

function getOptions(raw = {}) {
  return {
    ...DEFAULT_OPTIONS(),
    ...raw,
  }
}

// Invokes onChild for each attribute, or for each array item if the attribute is an Array
function walkObject(object, onChild, rawOptions) {
  const options = getOptions(rawOptions, object)

  options.seenObjects.push(object)
  
  const doRecursion = (child, path) => {
    if(options.seenObjects.find(seenObject => child.ref.equals(seenObject.ref))) {
      return
    }
    walkObject(child, onChild, {...options, path})
  }

  const handleChild = (child, localPath) => {
    if(options.filter(child)) {
      const newPath = [...options.path, ...localPath]
      if(options.recurse && options.depthFirst && IS_OBJ(child)) {
        doRecursion(child, newPath)
      }
      if(!options.childObjects.includes(child)) {
        onChild(child, newPath)
        options.childObjects.push(child)
      }
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
  const target = cleanPath.reduce((soFar, piece, pieceIndex) => {
    if(soFar[piece] === undefined) {
      if(Number.isInteger(Number(path[pieceIndex + 1]))) {
        soFar[piece] = []
      } else {
        soFar[piece] = {}
      }
    }
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