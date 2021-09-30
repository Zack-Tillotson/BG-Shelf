import {buildEmptyObject} from './utils'
import Ref from 'data/objectDb/ref'

// Opinionated functions for use in specific use cases

export function buildSelfClub(userId, name) {
  return buildSelf(userId, name).club
}

export function buildSelfMember(userId, name) {
  return buildSelf(userId, name).member
}

function buildSelf(userId, name) {
  const club = buildEmptyObject('club')
  const member = buildEmptyObject('member')

  club.ref = new Ref('club', Ref.AUTO_ID)
  club.attributes.name = name
  
  member.ref = new Ref('member', userId)
  member.attributes.name = name

  club.members.push(member)
  member.clubs.push(club)

  return {member, club}
}