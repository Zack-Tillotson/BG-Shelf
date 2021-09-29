import React, { useEffect } from 'react';
import cn from 'classnames'

import useInitGate from 'state/useInitGate'
import useAuth from 'data/auth/useAuth';
import useObjectDb from 'data/objectDb/useObjectDb';
import { buildSelfClub } from 'data/objectCreator';

import Page from 'components/Page'
import Member from 'molocules/Member'

import './item-view.scss'

const baseCn = 'item-view'

function ItemView(props) {

  const gate = useInitGate()
  const auth = useAuth()

  const {uid: userId, displayName} = auth.isInitialized ? auth.user : {}

  const club = useObjectDb({
    path: ['club', userId],
    enabled: !!userId,
    createFunction: buildSelfClub,
    createParams: [userId, displayName]
  })

  if(gate) return gate

  return (
    <Page className={baseCn}>
      <Member 
        view="Board Game Piggy"
        member={club.members[0]} />
    </Page>
  );
}

export default ItemView