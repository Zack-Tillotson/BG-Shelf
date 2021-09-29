import React, { useEffect } from 'react';
import cn from 'classnames'

import useInitGate from 'state/useInitGate'
import useAuth from 'data/auth/useAuth';
import useObjectDb from 'data/objectDb/useObjectDb';
import { buildSelfClub } from 'data/objectCreator';

import Page from 'components/Page'
import Club from 'molocules/Club'

import './club-view.scss'

const baseCn = 'club-view'

function ClubView(props) {

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
      <Club club={club} />
    </Page>
  );
}

export default ClubView