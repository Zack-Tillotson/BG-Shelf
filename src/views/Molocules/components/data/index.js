import {member1, member2} from './base/member'
import {club1} from './base/club'
import {ownership1} from './base/ownership'
import {session1, session2} from './base/session'
import {item1, item2, item3} from './base/item'

// Cross reference the various items
member1.collection.push(item1)
member1.collection.push(item2)
member1.wishlist.push(item3)
member1.sessions.push(session1)
member1.clubs.push(club1)

member2.collection.push(item3)
member2.sessions.push(session1)
member2.clubs.push(club1)

session1.item = item1
session2.item = item2

ownership1.item = item1

club1.members.push(member1)
club1.collection.push(item1)
club1.collection.push(item2)
club1.sessions.push(session1)

export {
  member1,
  member2,
  club1,
  ownership1,
  session1,
  session2,
  item1,
  item2,
  item3,
}