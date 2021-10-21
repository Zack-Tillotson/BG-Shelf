import { ObjectDbBase } from './objectDbBase'

const TYPE = 'item'
export class Item extends ObjectDbBase {
  static TYPE = TYPE

  static fromDb(id, object) {
    const ret = new Item({...object, id})
    return ret
  }

  getType() { 
    return TYPE
  }

}