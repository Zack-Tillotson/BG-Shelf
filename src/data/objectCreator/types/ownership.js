import { ObjectDbBase } from './objectDbBase'

const TYPE = 'ownership'

export class Ownership extends ObjectDbBase {
  constructor(item) {
    super(TYPE)

    this.item = item
    this.acquisitions = []
  }

  DEFAULT_ATTRS = {
    favorite: false,
    wishlist: false,
    collection: false,
  }
}