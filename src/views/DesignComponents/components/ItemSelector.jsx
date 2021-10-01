import React, { useState } from 'react';

import Card from 'atoms/Card'
import ItemSelector from 'components/ItemSelector'

function RenderItemSelector() {
  const [item, updateItem] = useState(null)

  return (
    <section>
      <h3 className="molocules__title">ItemSelector</h3>
      <ItemSelector onSelect={updateItem} />
      <Card>
        <h3>Item</h3>
        {!item && 'None Selected'}
        {item && item.name}
      </Card>
    </section>
  )
}

export default RenderItemSelector;