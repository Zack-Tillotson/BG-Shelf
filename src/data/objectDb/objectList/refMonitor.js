import debugObject from "../debug"
import Ref from "../ref"
import walkObject, {setChildPath} from "../util/walkObject"

const context = {} // deps

const refList = []
debugObject('objectList.refList', refList)

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

function cleanRefs(object) {
  walkObject(object, (child, path) => {
    setChildPath(object, path, new Ref(child))
  }, Ref.isDbRef)
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

export default {initialize, add}