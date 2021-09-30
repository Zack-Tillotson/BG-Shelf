import Ref from 'data/objectDb/ref'

//Returns an object of the given type
export function buildEmptyObject(type) {
  switch(type) {
    case 'acquisition': {
      return {
        ref: new Ref(type, Ref.AUTO_ID),
        attributes: {},
        item: null,
      }
    }
    case 'club': {
      return {
        ref: new Ref(type, Ref.AUTO_ID),
        attributes: {},
        members: [],
        sessions: [],
      }
    }
    case 'item': {
      return {
        ref: new Ref(type, Ref.AUTO_ID),
        attributes: {},
        member: null,
        ownership: null,
        acquisitions: [],
      }
    }
    case 'session': {
      return {
        ref: new Ref(type, Ref.AUTO_ID),
        attributes: {},
        item: null,
        participants: [],
      }
    }
    case 'member': {
      return {
        ref: new Ref(type, Ref.AUTO_ID),
        attributes: {},
        collection: [],
        wishlist: [],
        sessions: [],
        clubs: [],
      }
    }
    case 'ownership': {
      return {
        ref: new Ref(type, Ref.AUTO_ID),
        attributes: {
          favorite: false,
        },
        item: null,
      }
    }
    default: {
      throw new Error('Unknown object type ' + type)
    }
  }
}