import buildObject from './buildObject'
import normalizeObject from './normalizeObject'

const context = {}

function initialize(objectList) {
  context.objectList = objectList
}

function get(ref) {
  return buildObject(context.objectList.get, ref)
}

function normalize(object) {
  return normalizeObject(object)
}

export {initialize, get, normalize}