import Ref from "../ref"
import walkObject, {setChildPath} from "../util/walkObject"

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

function cleanRefs(object) {
  walkObject(object, (child, path) => {
    setChildPath(object, path, new Ref(child))
  }, Ref.isDbRef)
}

function monitorRef(ref) {
  context.db.collection(ref.getCollection()).doc(ref.getDoc()).onSnapshot(doc => {
    const object = doc.data()
    cleanRefs(object)
    context.onData(object, ref)
  })
}

export default {initialize, add}