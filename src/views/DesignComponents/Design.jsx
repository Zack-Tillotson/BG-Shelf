import React, { useState } from 'react';

import useInitGate from 'state/useInitGate'
import Page from 'components/Page'

import './component.scss'

// components (stateful)
import RenderItemSelector from './components/ItemSelector'
import RenderSortAndFilter from './components/SortAndFilter'

function Component(props) {

  const gate = useInitGate()
  if(gate) return gate

  return (
    <Page className="molocules">
      <section>
        <h2 className="molocules__section-title">Components</h2>
        <RenderSortAndFilter />
        <RenderItemSelector />
      </section>
    </Page>
  );
}

export default Component;