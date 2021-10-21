import { ObjectDbBase } from './objectDbBase'

const TYPE = 'session'

export class Session extends ObjectDbBase {
  static TYPE = TYPE

  static fromDb(id, object) {
    const ret = new Session({id, ...object})
    return ret
  }

  getType() { 
    return TYPE
  }

  getDefaultAttrs() { 
    return {
      participants: []
    }
  }
}