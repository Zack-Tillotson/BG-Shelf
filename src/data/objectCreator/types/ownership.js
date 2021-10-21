import { ObjectDbBase } from './objectDbBase'

const TYPE = 'ownership'

export class Ownership extends ObjectDbBase {
  static TYPE = TYPE
  
  constructor(params) {
    super(params)
    
    this.acquisitions = this.acquisitions || []
  }

  static fromDb(id, object) {
    const ret = new Ownership({id, ...object})
    return ret
  }

  getType() { 
    return TYPE
  }

  getDefaultAttrs() { 
    return {
      favorite: false,
      wishlist: false,
      collection: false,
    }
  }
}