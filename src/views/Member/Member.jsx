import React, { useEffect } from 'react';
import cn from 'classnames'

import useInitGate from 'state/useInitGate'
import useCollection from 'data/collection/useCollection'
import useAuth from 'data/auth/useAuth';

import Page from 'components/Page'
import Member from 'molocules/Member'

import './member-view.scss'

const baseCn = 'member-view'

function MemberView(props) {

  const gate = useInitGate()
  const auth = useAuth()

  const userId = auth.isInitialized ? auth.user.uid : ''

  const club = useCollection('club', userId)

  useEffect(() => {
    // null club means we haven't requested it yet
    if(!club) {
      
    }
  }, [club])

  if(gate) return gate
  if(!club) return auth.renderLoadingPage()

  return (
    <Page className={baseCn}>
      <Member 
        view="Board Game Piggy"
        member={club.members[0]} />
    </Page>
  );
}

export default MemberView