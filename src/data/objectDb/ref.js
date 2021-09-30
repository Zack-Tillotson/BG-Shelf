class Ref {
  constructor(...params) {
    if(params.length === 1 && typeof params[0] === 'string') {
      const [str, collection, doc] = params[0].split('.')

      this.collection = collection
      this.doc = doc
    } else if(params.length === 1 && Ref.isDbRef(params[0])) {
      const path = params[0].path
      const [collection, doc] = path.split('/')

      this.collection = collection
      this.doc = doc
    } else if(params.length === 1 && params[0] instanceof Array) {
      const [collection, doc] = params[0]

      this.collection = collection
      this.doc = doc
    } else if(params.length === 2) {
      this.collection = params[0]
      this.doc = params[1]
    }
  }

  static isDbRef(target) {
    return target instanceof Object && !!target.firestore
  }

  static isRefLike(target) {
    return Ref.isDbRef(target) || target instanceof Ref
  }

  static AUTO_ID = 'AUTO_ID'

  getCollection() {
    return this.collection
  }

  getDoc() {
    return this.doc
  }

  equals(other) {
    return this.collection === other.getCollection() && this.doc === other.getDoc()
  }

  toString() {
    return `ref.${this.collection}.${this.doc}`
  }
}

export default Ref