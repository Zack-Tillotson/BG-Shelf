import React from 'react'
import cn from 'classnames'

import Button from 'atoms/Button'
import ItemMini from 'molocules/ItemMini'
import ListTitle from 'molocules/ListTitle'
import InputList from 'components/InputList'

const baseCn = 'session'

function SessionForm(props) {
  const {
    itemSelect,
    item,
    ownership,
    onSubmit,
  } = props

  const handleSubmit = event => {
    event.preventDefault();
    if(onSubmit) onSubmit()
  }

  return (
    <div className={cn(baseCn)}>
      {itemSelect && ('ItemSelector')}
      {!itemSelect && !!item && (
        <ItemMini item={item} details={false} ownership={ownership} />
      )}
      <form onSubmit={handleSubmit}>
        <InputList object="session" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default SessionForm