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

  const gate = useInitGate()
  const auth = useAuth()

  const {uid: userId, displayName} = auth.isInitialized ? auth.user : {}

  const {
    clubId,
  } = useParams()

  const club = useObjectDb({
    path: ['club', clubId],
    enabled: !!clubId,
  })

  if(gate) return gate

  return (
    <Page className={baseCn}>
      <Club club={club} />
    </Page>
  );
}

export default ClubView