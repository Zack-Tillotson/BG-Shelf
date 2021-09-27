class Ref {
  constructor(collection, doc) {
    this.collection = collection
    this.doc = doc
  }

  getCollection() {
    return this.collection
  }

  getDoc() {
    return this.doc
  }
}