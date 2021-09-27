export default class CollectionObject {
  constructor(options = {}) {
    const {raw = undefined, DNE = false} = options

    this.raw = raw
    this.DNE = DNE
    
    if(this.raw) {
      const {type, id, value} = raw
      this.id = id
      this.type = type
      Object.keys(value).forEach(key => this[key] = value[key])
    }
  }

  isObjectExist() {
    return !this.DNE && !!this.raw
  }

  isRequesting() {
    return this.raw instanceof Promise
  }

  isRequested() {
    return this.raw !== undefined
  }

  isReady() {
    return this.isObjectExist(this)
  }
}