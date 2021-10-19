import { ObjectDbBase } from './objectDbBase'

const TYPE = 'session'

export class Session extends ObjectDbBase {
  constructor(item, attributes) {
    super(TYPE, {attributes})

    this.item = item
  }

  DEFAULT_ATTRS = {
    participants: []
  }
}