import {isObjectExist} from './index'

export default class CollectionObject {
  constructor({raw = undefined, DNE = false}) {
    this.raw = raw
    this.DNE = DNE
  }

  isObjectExist() {
    return this.DNE
  }

  isRequesting() {
    return this.raw instanceof Promise
  }

  isRequested() {
    return this.raw !== undefined
  }

  isReady() {
    return isObjectExist(this)
  }
}