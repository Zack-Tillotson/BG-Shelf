const context = {} // deps

const refList = []

function initialize(db, onData) {
  context.db = db
  context.onData = onData
}

function add(ref) {
  if(refList.includes(ref)) return false

  refList.push(ref)
  monitorRef(ref)
  
  return true
}

function monitorRef(ref) {
  context.db.collection(ref.getCollection()).doc(ref.getDoc()).onSnapshot(doc => {
    const object = doc.data()
    context.onData(object, ref)
  })
}

export {initialize, add}