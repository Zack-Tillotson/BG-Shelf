import React from 'react'
import cn from 'classnames'

import Image from 'atoms/Image'
import SharpToggle from 'atoms/SharpToggle'

import ListTitle from 'molocules/ListTitle'
import Acquisitions from 'molocules/Acquisitions'
import SessionMini from 'molocules/SessionMini'
import AttributeList from 'molocules/AttributeList'

import './component.scss'

const baseCn = 'item'

function Item(props) {
  const {
    item,
    ownership,
    club,

    baseUrl = '',
    
    modifiable = false,
    
    onToggleFavorite,
    onToggleCollection,
    onToggleWishlist,
    
    onEditSession,
    onDeleteSession,
    
    onAddAquisition,
    onEditAcquisition,
    onDeleteAcquisition,
  } = props

  const sessions = club.getSessions(item)

  return (
    <div className={cn(baseCn)}>
      <section className={cn(`${baseCn}__quick-actions`)}>
        <SharpToggle color="red" onClick={onToggleFavorite} active={ownership.attributes.favorite}>Favorite</SharpToggle>
        <SharpToggle color="blue" onClick={onToggleCollection} active={ownership.attributes.collection}>Collection</SharpToggle>
        <SharpToggle color="green" onClick={onToggleWishlist} active={ownership.attributes.wishlist}>Wishlist</SharpToggle>
      </section>
      <section>
        <h1>{item.attributes.name}</h1>
        <div className={cn(`${baseCn}__year`)}>
          <span className={cn(`${baseCn}__label`)}>Year: </span> {item.attributes.releaseDate}
        </div>
      </section>
      <section className={cn(`${baseCn}__image`)}>
        <Image className={cn(`${baseCn}__hero`)} src={item.attributes.canonicalImage} />
      </section>
      <section className={cn(`${baseCn}__section`)}>
        <ListTitle showButton={modifiable} button={{type: 'link', children: "+ Add", primary: true, to: `${baseUrl}/session/?itemId=${item.id}`}}>
          Plays
        </ListTitle>
        {sessions.length === 0 && (
          <div>Not yet played.</div>          
        )}
        <ol>
          {sessions.map(session => (
            <li key={session.id} className="item__list-item">
              <SessionMini
                noHeader
                session={session} 
                modifiable={modifiable} 
                onEdit={onEditSession}
                onDelete={onDeleteSession} />
            </li>
          ))}
        </ol>
      </section>
      <section className={cn(`${baseCn}__section`)}>
        <Acquisitions 
          noHeader 
          ownership={ownership}
          modifiable={modifiable} 
          onAdd={onAddAquisition}
          onEdit={onEditAcquisition} 
          onDelete={onDeleteAcquisition} />
      </section>
      <section className={cn(`${baseCn}__section`)}>
        <ListTitle>
          Attributes
        </ListTitle>
        <AttributeList object="item" values={item.attributes} />
      </section>
    </div>
  );
}

export default Item;