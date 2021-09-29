import {buildEmptyObject} from './utils'

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

  club.id = userId
  club.attributes.name = name
  
  member.id = userId
  member.attributes.name = name

  club.members.push(member)
  member.clubs.push(club)

  return {member, club}
}