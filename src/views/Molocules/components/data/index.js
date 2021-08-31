import {member1, member2} from './base/member'
import {club1} from './base/club'
import {ownership1, ownership2} from './base/ownership'
import {session1, session2} from './base/session'
import {item1, item2, item3} from './base/item'

let id = 0
const getId = () => id++

// Cross reference the various items
member1.id = getId()
member1.collection.push(item1)
member1.collection.push(item2)
member1.wishlist.push(item3)
member1.sessions.push(session1)
member1.clubs.push(club1)

member2.id = getId()
member2.collection.push(item3)
member2.sessions.push(session1)
member2.clubs.push(club1)

club1.id = getId()
club1.members.push(member1)
club1.collection.push(item1)
club1.collection.push(item2)
club1.sessions.push(session1)

ownership1.id = getId()
ownership1.item = item1

ownership2.id = getId()
ownership2.item = item2

session1.id = getId()
session1.item = item1

session2.id = getId()
session2.item = item2

item1.id = getId()

item2.id = getId()

item3.id = getId()

export {
  member1,
  member2,
  club1,
  ownership1,
  ownership2,
  session1,
  session2,
  item1,
  item2,
  item3,
}