import React from 'react'
import cn from 'classnames'

import Button from 'atoms/Button'
import ItemMini from 'molocules/ItemMini'
import ListTitle from 'molocules/ListTitle'
import AttributeList from '../../AttributeList/AttributeList'

const baseCn = 'session'

function SessionView(props) {
  const {
    session,
    item,
    ownership,
  } = props

  return (
    <div className={cn(baseCn)}>
      <ItemMini item={item} details={false} ownership={ownership} />
      <AttributeList object="session" values={session} position={['secondary', 'full']} />
    </div>
  )
}

export default SessionView