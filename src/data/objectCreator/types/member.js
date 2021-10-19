import { ObjectDbBase } from './objectDbBase'

const TYPE = 'member'

const attributeFilter = attribute => ownership => ownership.attributes[attribute]

export class Member extends ObjectDbBase {
  constructor(id, attributes) {
    super(TYPE, {id, attributes})

    this.clubs = []
    this.ownerships = []
  }

  DEFAULT_ATTRS = {
    name: '',
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
    return this.ownerships.find(ownership => ownership.item === item)
  }
}