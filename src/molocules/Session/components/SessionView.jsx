import React from 'react'
import cn from 'classnames'

import Button from 'atoms/Button'
import ItemMini from 'molocules/ItemMini'
import AttributeList from '../../AttributeList/AttributeList'

const baseCn = 'session'

function SessionView(props) {
  const {
    session,
    item,
    ownership,
    modifiable,
    onEdit,
    onDelete,
  } = props

  return (
    <div className={cn(baseCn)}>
      <ItemMini item={item} details={false} ownership={ownership} />
      <AttributeList object="session" values={session} position="secondary" />
      <div className="session__control">
        {modifiable && onEdit && (
          <Button className="session__control-edit" hollow onClick={onEdit}>Edit</Button>
        )}
        {modifiable && onDelete && (
          <Button hollow onClick={onDelete}>Delete</Button>
        )}
      </div>
    </div>
  )
}

export default SessionView