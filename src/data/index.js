import firebase from "firebase/app";
import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

import collection from './collection'
import image from './image'

const apps = { // TODO move this to a better config location
  'pigamesclub': {
    firebaseConfig:  {
      apiKey: "AIzaSyDTsmjk49sELCNPXSZVqXzpA0TzctoSzE8",
      authDomain: "pigamesclub.firebaseapp.com",
      databaseURL: "https://pigamesclub-default-rtdb.firebaseio.com",
      projectId: "pigamesclub",
      storageBucket: "pigamesclub.appspot.com",
      messagingSenderId: "243665209457",
      appId: "1:243665209457:web:9b6f119f403eee4eddf3d0",
      measurementId: "G-ZLR5BQ87FH"
    },
    collectionType: 'boardgame',
  },
}

function initialize(store, appId) {

  const config = apps[appId]

  if(!config) throw new Error('appId not recognized: ', appId, ', acceptable values: ', Object.keys(apps))

  firebase.initializeApp(config.firebaseConfig);
  collection.initialize(store, config.collectionType)
  image.initialize()
}

export default initialize