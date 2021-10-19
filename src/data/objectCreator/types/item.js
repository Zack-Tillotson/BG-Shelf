import { ObjectDbBase } from './objectDbBase'

const TYPE = 'item'

export class Item extends ObjectDbBase {
  constructor(id, attributes) {
    super(TYPE, {id, attributes})
  }

  DEFAULT_ATTRS = {
  }
}