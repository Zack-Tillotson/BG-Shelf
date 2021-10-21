import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import cn from 'classnames'

import useInitGate from 'state/useInitGate'
import useAuth from 'data/auth/useAuth';
import useObjectDb from 'data/objectDb/useObjectDb';
import { buildSelfMember } from 'data/objectCreator';

import Page from 'components/Page'
import Member from 'molocules/Member'

import './member-view.scss'

const baseCn = 'member-view'

function MemberView(props) {

  const auth = useAuth()
  
  const {uid: userId, displayName} = auth.isInitialized ? auth.user : {}
  
  const {
    clubId, 
    memberId = userId, 
    itemId,
  } = useParams()
  
  const member = useObjectDb({
    path: ['member', memberId],
    enabled: !!userId,
    createFunction: buildSelfMember,
    createParams: [userId, displayName]
  })

  const urlClub = useObjectDb({
    path: ['club', clubId],
    enabled: !!clubId,
  })
  
  const gate = useInitGate(member)
  if(gate) return gate

  return (
    <Page className={baseCn}>
      <Member 
        view="Board Game Piggy"
        member={member}
        club={urlClub} />
    </Page>
  );
}

export default MemberView