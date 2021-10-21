import { Club } from './types/club'
import { Member } from './types/member'
import { Ownership } from './types/ownership'
import { Item } from './types/item' 
import { Acquisition } from './types/acquisition'
import { Session } from './types/session'

export {
  Club,
  Member,
  Ownership,
  Item,
  Acquisition,
  Session,
}

const OBJECT_LIST = [
  Club,
  Member,
  Ownership,
  Item,
  Acquisition,
  Session,
]

// Opinionated functions for use in specific use cases

export function buildSelfClub(userId, name) {
  return buildSelf(userId, name).club
}

export function buildSelfMember(userId, name) {
  return buildSelf(userId, name).member
}

function buildSelf(userId, name) {
  const club = new Club({attributes: {name: `${name}'s Club`}})
  const member = new Member({id: userId, attributes: {name}})
  
  club.members.push(member)
  member.clubs.push(club)

  return {member, club}
}

export function buildOwnership(member, attributes) {
  const item = new Item({id: attributes.bggId, attributes})
  const ownership = new Ownership({item})

  return ownership
}

export function getObjectOfType(type) {
  const retType = OBJECT_LIST.find(object => object.TYPE === type)
  if(!retType) throw new Error('object type not found: ' + type)

  return retType
}
