import React from 'react'
import cn from 'classnames'

import Button from 'atoms/Button'

import './component.scss'

const baseCn = 'member-mini'

function MemberMini(props) {
  const {
    member,
    showButton = false,
    buttonText = 'Invite',
    onButtonClick,
  } = props

  return (
    <div className={cn(baseCn)}>
      <h3 className={cn(`${baseCn}__name`)}>{member.name}</h3>
      {!showButton && (
        <div key="highlights" className={cn(`${baseCn}__highlights`)}>
          <span className={cn(`${baseCn}__highlight`)}>
            <span className={cn(`${baseCn}__highlight-label`)}>Times played: </span>
            <span className={cn(`${baseCn}__highlight-value`)}>{member.sessions.length}</span>
          </span>
          <span className={cn(`${baseCn}__highlight`)}>
            <span className={cn(`${baseCn}__highlight-label`)}>Games owned: </span>
            <span className={cn(`${baseCn}__highlight-value`)}>{member.collection.length}</span>
          </span>
        </div>
      )}
      {showButton && (
        <div key="button" className={cn(`${baseCn}__button-container`)}>
          <Button className={cn(`${baseCn}__button-container`)} tight hollow onClick={onButtonClick}>
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
}

export default MemberMini;