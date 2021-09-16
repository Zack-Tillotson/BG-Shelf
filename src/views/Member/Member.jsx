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

  const {uid: userId, displayName} = auth.isInitialized ? auth.user : {}

  const club = useCollection(['club', userId], {
    createOnNull: true, 
    obj: {
      type: 'club',
      id: userId,
      attributes: {
        name: displayName
      },
      members: [{
        type: 'member',
        id: userId,
        attributes: {
          name: displayName,
        },
      }]
    },
  })

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