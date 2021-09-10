import React from 'react';
import cn from 'classnames'

import useInitGate from 'state/useInitGate'
// import useData from 'data/collection/useData'

import Page from 'components/Page'

import './member-view.scss'

const baseCn = 'member-view'

function Member(props) {

  const gate = useInitGate()


  if(gate) return gate

  return (
    <Page className={baseCn}>
      <h1>Member</h1>
    </Page>
  );
}

export default Member