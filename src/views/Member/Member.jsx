import React, { useEffect } from 'react';
import cn from 'classnames'

import useInitGate from 'state/useInitGate'
import useCollection from 'data/collection/useCollection'
import useAuth from 'data/auth/useAuth';
import { buildSelfClub } from 'data/collection/object';

import Page from 'components/Page'
import Member from 'molocules/Member'

import './member-view.scss'

const baseCn = 'member-view'

function MemberView(props) {

  const gate = useInitGate()
  const auth = useAuth()

  const {uid: userId, displayName} = auth.isInitialized ? auth.user : {}

  const club = useCollection(['club', userId], {
    enabled: !!userId,
    createOnNull: true, 
    createFunction: () => buildSelfClub(userId, displayName)
  })

  if(gate) return gate
  if(!club.isReady()) return auth.renderLoadingPage()

  return (
    <Page className={baseCn}>
      <Member 
        view="Board Game Piggy"
        member={club.members[0]} />
    </Page>
  );
}

export default MemberView