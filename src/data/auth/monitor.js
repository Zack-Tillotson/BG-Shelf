import firebase from 'firebase'

let userPromiseResolve = null
const context = {
  userPromise: new Promise(resolve => userPromiseResolve = resolve),
  isInitializing:  false,
  isInitialized: false,
  user: null,
  subscribers: [], // callbacks to invoke with new auth state 
}

export const getCurrentAuthData = () => ({
  isInitializing: context.isInitializing, 
  isInitialized: context.isInitialized,
  isLoggedIn: !!context.user, 
  user: context.user,
})

const initializeAuthDataMonitor = () => {
  context.isInitializing = true
  firebase.auth().onAuthStateChanged(authUser => {
    context.isInitialized = true
    context.user = authUser
    if(context.user) userPromiseResolve(context.user)
    context.subscribers.forEach(subscriber => subscriber(getCurrentAuthData()))
  });
}

// Subscribe to auth state with this, pass in a callback which will be invoked whenever the auth state
// changes. Invoke the returned function to remove the subscription.
export const subscribe = subscriber => {
  if(!context.isInitializing) {
    initializeAuthDataMonitor()
  }
  context.subscribers.push(subscriber)
  return () => context.subscribers = context.subscribers.filter(sub => sub !== subscriber)
}