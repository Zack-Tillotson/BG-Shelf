const selector = state => state.data.collection

export const objectSelector = (type, id, state) => {
  try {
    let ret = state.objects
    if(type) {
      ret = ret[type]
    }
    if(id) {
      ret = ret[id]
    }
    return ret
  } catch(e) {
    return null
  }
}


export default selector