import {types} from './actions'

const DEFAULT_STATE = {
  objects: {},

  // Used to store the promises which resolve when objects are fully loaded (including children)
  objectPromises: {},
  objectPromisesDebug: {},
}

function collection(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case types.initialize: {
      return DEFAULT_STATE
    }
    case types.dataLoaded: {
      const {type, id, data, objectPromise} = action.payload
      
      const typeObj = state.objects[type] || {} // Handle being the first item of this type loaded
      const stateObj = id ? {...typeObj, [id]: data} : data // No Id means this is a singleton

      let objectPromises = state.objectPromises, objectPromisesDebug = state.objectPromisesDebug
      if(objectPromise) {
        objectPromises = {...objectPromises, [`${type}.${id}`]: objectPromise}
      }
      objectPromisesDebug = {...objectPromisesDebug, [`${type}.${id}`]: !!objectPromise}

      return {...state, objects: {...state.objects, [type]: stateObj}, objectPromises, objectPromisesDebug}
    }
  }
  return state
}

export default collection