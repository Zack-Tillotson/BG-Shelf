/*
 * This module handle interacting with the data store
 */

import actions from './state/actions'
import selector from './state/selector'

const context = {
  store: null,
}

function initialize(store) {
  context.store = store;
  getStore().dispatch(actions.initialize())
}

function getStore() {
  if(!context.store) {
    throw new Error('store not initialized on context.')
  }
  return context.store;
}

function get() {
  return selector(getStore().getState())
}

function listen(callback) {
  return getStore().subscribe(callback)
}

function dataReceived(type, id, data) {
  getStore().dispatch(actions.dataLoaded({type, id, data, isPromise: data instanceof Promise}))
}

export default {
  initialize,

  get,
  listen,
  dataReceived,
}