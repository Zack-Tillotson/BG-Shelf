import { ObjectDbBase } from './objectDbBase'

const attributeFilter = attribute => ownership => ownership.attributes[attribute]

const TYPE = 'member'

export class Member extends ObjectDbBase {
  static TYPE = TYPE
  constructor(params) {
    super(params)

    this.clubs = this.clubs || []
    this.ownerships = this.ownerships || []
  }

  static fromDb(id, object) {
    const ret = new Member({id, ...object})
    return ret
  }

  getType() { 
    return TYPE
  }

  getDefaultAttrs() { 
    return {
      name: '',
    }
  }

  getCollection() {
    return this.ownerships.filter(attributeFilter('collection'))
  }

  getWishlist() {
    return this.ownerships.filter(attributeFilter('wishlist'))
  }

  getFavorites() {
    return this.ownerships.filter(attributeFilter('favorite'))
  }

  getOwnership(item) {
    return this.ownerships.find(ownership => ownership.item.equals(item))
  }
}