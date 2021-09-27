const subscribers = []

function getSubscribers() {
  return subscribers
}

function subscribe(callback, refList) {
  subscribers.push({callback, refList})
  return () => unsubscribe(callback)
}

function unsubscribe(callback) {
  const index = this.subscribers.findIndex(item => item.callback === callback)
  if(index < 0) throw new Error('Unable to remove callback, not in the callback list')

  delete subscribers[index]
}

export default {getSubscribers, subscribe, unsubscribe}