import Ref from 'data/objectDb/ref'

export class ObjectDbBase {

  // Raw args can be:
  // 1. Undefined
  // 2. Object with any subset of id, attributes, ...rest attributes
  //    id is special, it's used in refs and gets default value of AUTO_ID (random number)
  //    attributes is special, it gets a default value from child class
  //    everything else is taken and applied as is
  constructor(rawArgs) {
    const {
      id,
      attributes,
      ...rest
    } = this.getArgs(rawArgs)

    this.ref = new Ref(this.getType(), id)
    this.attributes = attributes
    this.id = id
    
    Object.keys(rest).forEach(key => this[key] = rest[key])
  }

  getArgs(rawArgs = {}) {
    const attributes = {...this.getDefaultAttrs(), ...rawArgs.attributes}
    
    return {
      ...ObjectDbBase.BASE_ARGS,
      ...rawArgs,
      attributes,
    }
  }

  static BASE_ARGS = {
    id: Ref.AUTO_ID,
    attributes: {},
  }

  getDefaultAttrs() { 
    return {}
  }

  equals(otherObject) {
    return !!otherObject && otherObject instanceof Object && this.ref.equals(otherObject.ref)
  }
}