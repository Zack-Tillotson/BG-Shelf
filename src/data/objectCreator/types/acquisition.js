import { ObjectDbBase } from './objectDbBase'

const TYPE = 'acquisition'

export class Acquisition extends ObjectDbBase {
  constructor(attributes) {
    super(TYPE, {attributes})
  }
}