import { ObjectDbBase } from './objectDbBase'

const TYPE = 'club'

export class Club extends ObjectDbBase {
  constructor(attributes) {
    super(TYPE, {attributes})

    this.members = []
    this.sessions = []
  }

  DEFAULT_ATTRS = {
    name: '',
  }

  getSessions(item) {
    return this.sessions.filter(session => session.item === item)
  }
}