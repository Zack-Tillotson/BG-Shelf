import {select, debounce, put} from 'redux-saga/effects'

import actions from './actions';
import formSelector from 'state/selectors/form'

const formCacheName = 'item-form'

function* handleCacheForm() {
  const formData = yield select(formSelector)
  sessionStorage.setItem(formCacheName, JSON.stringify(formData))
}

function* loadFormFromCache() {
  const formDataString = sessionStorage.getItem(formCacheName)
  const formData = JSON.parse(formDataString)
  yield put(actions.formInitialized(formData))
}

function* monitorForm() {
  yield debounce(1000, '*', handleCacheForm)
}

export default [
  monitorForm,
  loadFormFromCache,
]
