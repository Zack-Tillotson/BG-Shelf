import React from 'react'
import cn from 'classnames'

import ItemMini from 'molocules/ItemMini'

const baseCn = 'ownership'

function OwnershipView(props) {
  return (
    <div className={cn(baseCn)}>
        <ItemMini item={props.item} />
    </div>
  )
}

export default OwnershipView