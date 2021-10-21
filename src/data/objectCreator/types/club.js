import { ObjectDbBase } from './objectDbBase'

const TYPE = 'club'

export class Club extends ObjectDbBase {
  static TYPE = TYPE
  
  constructor(params) {
    super(params)
    
    this.members = this.members || []
    this.sessions = this.sessions || []
  }

  static fromDb(id, object) {
    const ret = new Club({id, ...object})
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

  getSessions(item) {
    return this.sessions.filter(session => session.item === item)
  }
}