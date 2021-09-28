import debug from './debug'

const subscribers = []

debug('pubSub', subscribers)

function getSubscribers() {
  return subscribers
}

function subscribe(ref, callback) {
  subscribers.push({ref, callback})
  return () => unsubscribe(callback)
}

function unsubscribe(callback) {
  const index = this.subscribers.findIndex(item => item.callback === callback)
  if(index < 0) throw new Error('Unable to remove callback, not in the callback list')

  delete subscribers[index]
}

function publish(ref, object) {
  getSubscribers().forEach(subber => subber.callback(ref, object))
}

export default {publish, getSubscribers, subscribe, unsubscribe}