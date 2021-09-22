/*
 * This module is the main interface to interact with database
 * objects, an object is identified by the objType + id and
 * typically has the location {objType}/{id}/. Items will be 
 * returned with the id attribute added to the object itself.
 */

import firebase from 'firebase'
import CollectionObject from './object/collectionObject';

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
  const handler = snapshot => {

    let value = null

    if(snapshot.exists()) {
      value = snapshot.val()
    }

    const cleanObject = new CollectionObject(raw: {
      id,
      type,
      value,
    })

    return callback(cleanObject)
  }
  objRef.on('value', handler)
  return () => objRef.off(handler)
}

function upsert(data) {
  const {id, type, ...attrs} = data

  const objRef = getObjRef(type, id)
  
  if(id) { // Existing item
    objRef.update(attrs)
    return id
  } else {
    const key = objRef.push().key
    objRef.update({[key]: attrs})
    return key
  }
}

function remove(data) {
  const {id, type} = data
  return getObjRef(type, id).remove()
}
 
export default {
  initialize,

  read,
  upsert,
  remove,
}