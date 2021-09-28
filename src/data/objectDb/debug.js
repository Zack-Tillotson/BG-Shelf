const debugContext = {}

window.__OBJECTDB__DEBUG__ = debugContext

function debugObject(key, value) {
  debugContext[key] = value
}

export default debugObject