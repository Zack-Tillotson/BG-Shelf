import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import Card from 'atoms/Card'

import Relationship from 'molocules/Relationship'
import ListTitle from 'molocules/ListTitle'
import ClubMini from 'molocules/ClubMini'
import ItemMini from 'molocules/ItemMini'

import './component.scss'

const baseCn = 'member-member'

function Member(props) {
  const {
    view,
    member,
    club,
    baseUrl = '',
  } = props

  const {
    clubs,
  } = member

  const itemGroups = [
    {linkTo: `collection`, title: 'Collection', items: member.getCollection()},
    {linkTo: `wishlist`, title: 'Wishlist', items: member.getWishlist()},
  ]

  return (
    <div className={cn(baseCn)}>
      <Relationship view={view} club={club} member={member} />
      {itemGroups.map(itemGroup => (
        <div key={itemGroup.title} className={`${baseCn}__card-list`}>
          <ListTitle button={{type: 'link', children: "View full " + itemGroup.title, to: itemGroup.linkTo, primary: true}}>
            {itemGroup.title}
          </ListTitle>
          {itemGroup.items.slice(0, 3).map(ownership => {
            const selfOwnership = member.getOwnership(ownership.item)
            return (
              <Link key={ownership.id} to={`${baseUrl}/item/${ownership.item.id}/`}>
                <Card className={`${baseCn}__card`} >
                  <ItemMini item={ownership.item} member={member} ownership={selfOwnership} />
                </Card>
              </Link>
            )
          })}
        </div>
      ))}
        
      {!club && (
        <section>
          <ListTitle>Clubs</ListTitle>
          {clubs.map((club, index) => (
            <Link key={club.id || index} to={`/app/club/${club.id}/`}>
              <Card className={`${baseCn}__card`}>
                <ClubMini club={club} />
              </Card>
            </Link>
          ))}
        </section>
      )}
    </div>
  );
}

export default Member;