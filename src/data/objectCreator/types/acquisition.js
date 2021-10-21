import { ObjectDbBase } from './objectDbBase'

const TYPE = 'acquisition'

export class Acquisition extends ObjectDbBase {
  static TYPE = TYPE

  static fromDb(id, object) {
    const ret = new Acquisition({id, ...object})
    return ret
  }

  getType() {
    return TYPE
  }
}