import {buildEmptyObject} from './utils'

// Opinionated functions for use in specific use cases
export function buildSelfClub(userId, name) {
  const club = buildEmptyObject('club')
  const member = buildEmptyObject('member')

  club.id = userId
  club.attributes.name = name
  
  member.id = userId
  member.attributes.name = name

  club.members.push(member)
  member.clubs.push(club)

  return club
}