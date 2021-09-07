import React from 'react';

import ItemSelector from 'components/ItemSelector'

function RenderItemSelector() {
  return (
    <section>
      <h3 className="molocules__title">ItemSelector</h3>
      <ItemSelector onSelect={item => console.log('selected item', item)} />
    </section>
  )
}

export default RenderItemSelector;