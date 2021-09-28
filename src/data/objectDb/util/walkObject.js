import Ref from "../ref"

const REF_ONLY = item => item instanceof Ref

// Invokes onChild for each attribute, or for each array item if the attribute is an Array
function walkObject(object, onChild, filter = REF_ONLY) {
  Object.keys(object).forEach(key => {
    const child = object[key]
    if(child instanceof Array) {
      child.forEach((subChild, index) => {
        if(filter(subChild)) {
          onChild(subChild, [key, index])
        }
      })
    } else {
      if(filter(child)) {
        onChild(child, [key])
      }
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