/*
 * This module is the main interface to interact with database
 * objects, an object is identified by the objType + id and
 * typically has the location {objType}/{id}/. Items will be 
 * returned with the id attribute added to the object itself.
 */

import firebase from 'firebase'

const context = {
  db: null,
}

function getDb() {
  if(!context.db) {
    throw new Error('db not initialized on context.')
  }
  return context.db;
}

function getObjRef(type, id) {
  const path = !!id ? `${type}/${id}` : type
  return getDb().ref(path)
}

function initialize(store) {
  context.db = firebase.database();
}

function read(type, id, callback) {
  const objRef = getObjRef(type, id)
  return objRef.on('value', snapshot => {

    if(!snapshot.exists()) {
      throw new Error(`object does not exist - ${type}/${id}`)
    }

    const data = snapshot.val()
    callback(data, type, id)

    return data
  })
}

function upsert(type, id, data) {
  const {id: objId, ...attrs} = data

  const objRef = getObjRef(type, id)
  
  if(id) { // Existing item
    objRef.update(attrs)
    return objId
  } else {
    const key = objRef.push().key
    objRef.update({[key]: attrs})
    return key
  }
}

function remove(type, id) {
  return getObjRef(type, id).remove()
}
 
export default {
  initialize,

  read,
  upsert,
  remove,
}