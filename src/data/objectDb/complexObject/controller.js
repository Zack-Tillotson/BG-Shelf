import buildObject from './buildObject'

const context = {}

function initialize(objectList) {
  context.objectList = objectList
}

function get(ref) {
  return buildObject(context.objectList.get, ref)
}

export {initialize, get}