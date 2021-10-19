import { Club } from './types/club'
import { Member } from './types/member'
import { Ownership } from './types/ownership'
import { Item } from './types/item' 
import { Acquisition } from './types/acquisition'
import { Session } from './types/session'

// Opinionated functions for use in specific use cases

export function buildSelfClub(userId, name) {
  return buildSelf(userId, name).club
}

export function buildSelfMember(userId, name) {
  return buildSelf(userId, name).member
}

function buildSelf(userId, name) {
  const club = new Club({name})
  const member = new Member(userId, {name})
  
  club.members.push(member)
  member.clubs.push(club)

  return {member, club}
}

export function buildMemberItem(member, attributes) {
  const item = new Item(attributes.bggId, attributes)
  
  member.ownerships.push(new Ownership(item))

  return item
}

export {
  Club,
  Member,
  Ownership,
  Item,
  Acquisition,
  Session,
}