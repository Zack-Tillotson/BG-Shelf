//Returns an object of the given type
export function buildEmptyObject(type) {
  switch(type) {
    case 'acquisition': {
      return {
        type: 'acquisition',
        attributes: {},
        item: null,
      }
    }
    case 'club': {
      return {
        type: 'club',
        attributes: {},
        members: [],
        sessions: [],
      }
    }
    case 'item': {
      return {
        type: 'item',
        attributes: {},
      }
    }
    case 'session': {
      return {
        type: 'session',
        attributes: {},
        item: null,
        participants: [],
      }
    }
    case 'member': {
      return {
        type: 'member',
        attributes: {},
        collection: [],
        wishlist: [],
        sessions: [],
        clubs: [],
      }
    }
    case 'ownership': {
      return {
        type: 'ownership',
        attributes: {},
        item: null,
      }
    }
    default: {
      throw new Error('Unknown object type ' + type)
    }
  }
}