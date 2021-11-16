import firebase from "firebase/app";
import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

import objectDb from './objectDb'
import image from './image'

const firebaseConfig = {
  apiKey: "AIzaSyBNlRMrS5F5CIymipCqEcN-xcJPsLAwDZU",
  authDomain: "bgshelf.firebaseapp.com",
  databaseURL: "https://bgshelf-default-rtdb.firebaseio.com",
  projectId: "bgshelf",
  storageBucket: "bgshelf.appspot.com",
  messagingSenderId: "842063608603",
  appId: "1:842063608603:web:33e9b69a4030d5b30271be",
  measurementId: "G-73D8JCK3R7"
}

function initialize(store) {
  firebase.initializeApp(firebaseConfig);
  objectDb.initialize(firebase.firestore())
  image.initialize()
}

export default initialize