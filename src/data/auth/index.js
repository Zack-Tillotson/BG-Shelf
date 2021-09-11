import firebase from 'firebase'

import {init} from './ui'
import {getCurrentAuthData, subscribe} from './monitor'

export const logout = () => firebase.auth().signOut()

export {init, getCurrentAuthData, subscribe}