import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import Card from 'atoms/Card'
import Image from 'atoms/Image'

import Relationship from 'molocules/Relationship'
import ListTitle from 'molocules/ListTitle'
import ClubMini from 'molocules/ClubMini'

import './component.scss'

const baseCn = 'member-member'

function Member(props) {
  const {
    view,
    member,
    club,
  } = props

  const {
    clubs,
  } = member

  const itemGroups = [
    {linkTo: 'collection', title: 'Collection', items: member.getCollection()},
    {linkTo: 'wishlist', title: 'Wishlist', items: member.getWishlist()},
  ]

  return (
    <div className={cn(baseCn)}>
      <Relationship view={view} club={club} member={member} />
      <div className={`${baseCn}__card-list`}>
        {itemGroups.map(itemGroup => (
          <Link to={itemGroup.linkTo}>
            <Card className={`${baseCn}__card`}>
              <h3 className="member-member__title">{itemGroup.title}</h3>
              <div className={`${baseCn}__image-pack`}>
                {itemGroup.items.slice(0, 4).map(ownership => (
                  <figure key={ownership.item.id} className={`${baseCn}__image-pack-item`}>
                    <figcaption className={`${baseCn}__image-pack-name`}>{ownership.item.attributes.name}</figcaption>
                    <Image className={`${baseCn}__image-pack-image`} src={ownership.item.attributes.canonicalImage} />
                  </figure>
                ))}
              </div>
            </Card>
          </Link>
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
    </div>
  );
}

export default Member;