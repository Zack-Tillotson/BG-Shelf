import React from 'react'
import cn from 'classnames'

import './component.scss'

import ListTitle from 'molocules/ListTitle'
import Button from 'atoms/Button'

const baseCn = 'relationship'

function Relationship(props) {
  const {
    view,
    button,
    club,
    member,
  } = props

  return (
    <div className={cn(baseCn)}>
      {!!club && (
        <div className={cn(`${baseCn}__club-title`)}> 
          <Button type="link" className={cn(`${baseCn}__club`)} to="TODO" minimal tight>{club.attributes.name}</Button>
          <div className={cn(`${baseCn}__separator`)}>-</div>
          <Button type="link" className={cn(`${baseCn}__member`)} to="TODO" minimal tight>{member.attributes.name}</Button>
        </div>
      )}
      <ListTitle className={cn(`${baseCn}__view`)}button={button}>{view}</ListTitle>
    </div>
  );
}

export default Relationship;