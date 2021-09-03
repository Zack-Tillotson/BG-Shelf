import React from 'react'
import cn from 'classnames'

import SharpToggle from 'atoms/SharpToggle'
import Image from 'atoms/Image'

import AttributeList from 'molocules/AttributeList'

import './component.scss'

const baseCn = 'item-mini'

function ItemMini(props) {
  const {
    item,
    ownership,
    sessions,
    details = true,
  } = props

  let dateAcquired = null, isFavorite = false, acquisitionCount = 0
  try {
    dateAcquired = ownership.acquisitions[0].dateAcquired
    isFavorite = ownership.favorite
  } catch (e) {}

  return (
    <div className={cn(baseCn)}>
      {isFavorite && (
        <SharpToggle color="red" active={true} className={cn(`${baseCn}__favorite`)}>Favorite</SharpToggle>
      )}
      <div className={cn(`${baseCn}__image`)}>
        <Image className={cn(`${baseCn}__image-wrapper`, {[`${baseCn}__image-wrapper--small`]: !details})} src={item.canonicalImage} />
      </div>
      <div className={cn(`${baseCn}__primary-attrs`)}>
        <div className={cn(`${baseCn}__year`)}>
          {item.releaseDate}
        </div>
        <h3 className={cn(`${baseCn}__name`)}>
          {item.name}
        </h3>
      </div>
      {details && (
        <div className={cn(`${baseCn}__attrs`)}>
          <AttributeList object="item" values={item} position="secondary" additionalAttrs={(item.minPlayers || item.maxPlayers) ? [{
              label: 'Player Count', 
              value: [item.minPlayers, item.maxPlayers].filter(val => !!val).join('-'),
            }] : []} />
        </div>
      )}
      {details && (
        <div className={cn(`${baseCn}__ownership`)}>
          <div className={cn(`${baseCn}__ownership-wrapper`)}>
            {dateAcquired && (
              <div key="ownIt" className={cn('item-mini__icon', 'item-mini__owned', {['item-mini__owned--own-it']: dateAcquired})}>
                <span className="item-mini__ownership-icon item-mini__ownership-icon--own">$</span> Owned {dateAcquired && `(${dateAcquired})`}
              </div>
            )}
            
            {dateAcquired && !!sessions && (
              <div key="playedIt" className={cn('item-mini__icon', 'item-mini__played')}>
                <span className="item-mini__ownership-icon item-mini__ownership-icon--play">♙</span> Played {sessions.length} time{sessions.length > 1 && 's'}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemMini;