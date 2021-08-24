/*
 * Member data structure
 * 
 * firstName: string
 * lastName: string
 * 
 * collection[]: item[]
 * wishlist[]: item[]
 * sessions[]: session[]
 * 
 */

import {item1} from './item'

export const member1 = {
  firstName: 'Alice',
  lastName: 'Arrington',
  collection: [item1],
  wishlist: [],
  sessions: [],
}

export const member2 = {
  firstName: 'Bobby',
  lastName: 'Billings',
  collection: [],
  wishlist: [],
  sessions: [],
}

export default member1