import React, {useState} from 'react';

import ItemSelector from 'components/ItemSelector'

function RenderItemSelector() {
  const [toggle, updateToggle] = useState(false)

  const handleToggleClick = () => updateToggle(!toggle)
  return (
    <section>
      <h3 className="molocules__title">ItemSelector</h3>
      <ItemSelector isOpen={toggle} onSelect={item => console.log('selected item', item)} />
    </section>
  )
}

export default RenderItemSelector;