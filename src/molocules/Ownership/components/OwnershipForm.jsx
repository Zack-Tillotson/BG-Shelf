import React from 'react'
import cn from 'classnames'

import ItemMini from 'molocules/ItemMini'
import ListTitle from 'molocules/ListTitle'

const baseCn = 'ownership'

function Input(props) {
  return (
    <div>Input - {props.name}</div>
  )
}

function OwnershipView(props) {
  return (
    <div className={cn(baseCn)}>
      <ItemMini item={props.item} details={false} ownership={props.ownership} />
      <ListTitle>
        Acquisitions
      </ListTitle>
      <form>
        TODO
        <Input name={`ownership.date`} />
        <Input name={`ownership.price`} />
      </form>
    </div>
  )
}

export default OwnershipView