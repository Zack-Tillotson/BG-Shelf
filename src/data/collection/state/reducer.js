import {types} from './actions'

const DEFAULT_STATE = {}

function collection(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case types.initialize: {
      return DEFAULT_STATE
    }
    case types.dataLoaded: {
      const {type, id, data} = action.payload
      const typeObj = state[type] || {} // Handle being the first item of this type loaded
      const stateObj = id ? {...typeObj, [id]: data} : data // No Id means this is a singleton
      return {...state, [type]: stateObj}
    }
  }
  return state
}

export default collection