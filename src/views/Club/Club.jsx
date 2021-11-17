import React, { useEffect } from 'react';
import cn from 'classnames'
import { useParams } from 'react-router';

import useInitGate from 'state/useInitGate'
import useAuth from 'data/auth/useAuth';
import useObjectDb from 'data/objectDb/useObjectDb';

import Page from 'components/Page'
import Club from 'molocules/Club'

import './club-view.scss'

const baseCn = 'club-view'

function ClubView(props) {

  const auth = useAuth()

  const {uid: userId, displayName} = auth.user || {}

  const {
    clubId,
    memberId = userId, 
  } = useParams()
  
  const member = useObjectDb({
    path: ['member', memberId],
    enabled: !!userId,
  })

  const club = useObjectDb({
    path: ['club', clubId],
    enabled: !!clubId,
  })

  const gate = useInitGate(club)
  
  if(gate) return gate

  const isClubMember = !!club.members.find(clubMember => clubMember.equals(member))
  const baseUrl = `/app/club/${clubId}`

  return (
    <Page className={baseCn}>
      <Club club={club} modifiable={isClubMember} baseUrl={baseUrl} />
    </Page>
  );
}

export default ClubView