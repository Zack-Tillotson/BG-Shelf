import firebase from "firebase/app";
import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

import collection from './collection'
import image from './image'

const firebaseConfig = {
  apiKey: "AIzaSyBU4coiQFABFfweG91LTjQidzeSFSfpYfw",
  authDomain: "boardgamepiggy.firebaseapp.com",
  projectId: "boardgamepiggy",
  storageBucket: "boardgamepiggy.appspot.com",
  messagingSenderId: "941134951158",
  appId: "1:941134951158:web:10dfadc9fde6c14b2db2d7",
  measurementId: "G-PQS927J25D"
}

function initialize(store) {
  firebase.initializeApp(firebaseConfig);
  collection.initialize(store)
  image.initialize()
}

export default initialize