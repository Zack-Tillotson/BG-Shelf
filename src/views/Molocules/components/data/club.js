/*
 * Club data structure
 * 
 * name: string
 * members[]: member[]
 * sessions[]: session[]
 * collection[]: items[]
 */

import {member1, member2 } from './member'
import {item1} from './item'

export const club1 = {
  name: "Test Club #1",
  members: [member1, member2],
  sessions: [],
  collection: [item1],
}

export const club2 = {
  name: "Super califragalistic expialidotious",
  members: [member1, member2],
  sessions: [],
  collection: [],
}

export default club1