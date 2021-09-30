//Returns an object of the given type
export function buildEmptyObject(type) {
  switch(type) {
    case 'acquisition': {
      return {
        attributes: {},
        item: null,
      }
    }
    case 'club': {
      return {
        attributes: {},
        members: [],
        sessions: [],
      }
    }
    case 'item': {
      return {
        attributes: {},
      }
    }
    case 'session': {
      return {
        attributes: {},
        item: null,
        participants: [],
      }
    }
    case 'member': {
      return {
        attributes: {},
        collection: [],
        wishlist: [],
        sessions: [],
        clubs: [],
      }
    }
    case 'ownership': {
      return {
        attributes: {},
        item: null,
      }
    }
    default: {
      throw new Error('Unknown object type ' + type)
    }
  }
}