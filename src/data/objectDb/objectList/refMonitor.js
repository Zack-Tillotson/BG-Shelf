import debugObject from "../debug"
import Ref from "../ref"
import walkObject, {setChildPath} from "../util/walkObject"

const context = {
  db: null,
  onData: null,
} // deps

const refList = []
debugObject('objectList.refList', refList)

function cleanRefs(object) {
  walkObject(object, (child, path) => {
    setChildPath(object, path, new Ref(child))
  }, {filter: Ref.isDbRef})
}

function fillRefs(object) {
  walkObject(object, (child, path) => {
    setChildPath(object, path, context.db.collection(child.collection).doc(child.doc))
  })
}

function monitorRef(ref) {
  context.db.collection(ref.getCollection()).doc(ref.getDoc()).onSnapshot(doc => {
    let object = null

    if(doc.exists) {
      object = doc.data()
      cleanRefs(object)
    }

    context.onData(object, ref)
  })
}

function initialize(db, onData) {
  context.db = db
  context.onData = onData
}

function add(ref) {
  if(refList.find(item => ref.equals(item))) {
    return false
  }

  refList.push(ref)
  monitorRef(ref)
  
  return true
}

function put(object) {
  const {ref, id, ...restObject} = object
  const dbRef = context.db.collection(ref.collection).doc(ref.doc)
  
  fillRefs(restObject)
  
  dbRef.set(restObject)
  
  return dbRef
}

export default {initialize, add, put}