import firebase from 'firebase'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

const uiConfig = {
  signInSuccessUrl: window.location.href,
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  tosUrl: () => window.alert('This software is licensed "AS IS" and with all faults.'),
  privacyPolicyUrl: () => window.alert('The owner of this website is the sole owner of data collected by the site, it is not used for commercial purposes. Use at your own risk.')
};

let ui = null
function getUi() {
  if(!ui) {
    ui = new firebaseui.auth.AuthUI(firebase.auth())
  }
  return ui
}

// Start the FirebaseUI login Widget using Firebase.
export const init = targetId => {
  getUi().start(targetId, uiConfig)
}