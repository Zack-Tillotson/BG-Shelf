import React from 'react'
import cn from 'classnames'

import Button from 'atoms/Button'
import ItemMini from 'molocules/ItemMini'
import InputList from 'components/InputList'
import ItemSelector from 'components/ItemSelector'

const baseCn = 'session'

function SessionForm(props) {
  const {
    itemSelect,
    item,
    ownership,
    onSubmit,
    onItemSelect,
  } = props

  const handleSubmit = event => {
    event.preventDefault();
    if(onSubmit) onSubmit()
  }

  return (
    <div className={cn(baseCn)}>
      {itemSelect && <ItemSelector buttonLabel="Select Item" onSelect={onItemSelect} />}
      {!!item && (
        <ItemMini item={item} showDetails={false} ownership={ownership} />
      )}
      <form onSubmit={handleSubmit}>
        <InputList object="session" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default SessionForm