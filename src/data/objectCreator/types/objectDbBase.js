import Ref from 'data/objectDb/ref'

export class ObjectDbBase {
  constructor(type, rawArgs) {
    const {
      id,
      attributes,
    } = this.getArgs(rawArgs)

    this.ref = new Ref(type, id)
    this.attributes = attributes
  }

  getArgs(rawArgs = {}) {
    const attributes = {...this.DEFAULT_ATTRS, ...rawArgs.attributes}
    
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

  DEFAULT_ATTRS = {}
}