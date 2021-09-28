import {combineReducers} from 'redux';

import form from './reducers/form'

const rootReducer = combineReducers({
  form,
});

export default rootReducer;