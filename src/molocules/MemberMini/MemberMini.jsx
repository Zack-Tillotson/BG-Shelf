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
      <h3 className={cn(`${baseCn}__name`)}>{member.attributes.name}</h3>
      {!showButton && (
        <div key="highlights" className={cn(`${baseCn}__highlights`)}>
          <span className={cn(`${baseCn}__highlight`)}>
            <span className={cn(`${baseCn}__highlight-label`)}>Collection: </span>
            <span className={cn(`${baseCn}__highlight-value`)}>{member.getCollection().length} items</span>
          </span>
          <span className={cn(`${baseCn}__highlight`)}>
            <span className={cn(`${baseCn}__highlight-label`)}>Wishlist: </span>
            <span className={cn(`${baseCn}__highlight-value`)}>{member.getWishlist().length} items</span>
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