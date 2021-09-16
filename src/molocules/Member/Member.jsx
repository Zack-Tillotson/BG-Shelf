import React from 'react'
import cn from 'classnames'

import Card from 'atoms/Card'
import Image from 'atoms/Image'

import Relationship from 'molocules/Relationship'
import ListTitle from 'molocules/ListTitle'
import ClubMini from 'molocules/ClubMini'

import './component.scss'

const baseCn = 'member-member'

function MemberMini(props) {
  const {
    view,
    member = {},
    club,
  } = props

  const {
    collection = [],
    wishlist = [],
    clubs = [],
  } = member

  return (
    <div className={cn(baseCn)}>
      <Relationship view={view} club={club} member={member} />
      <div className={`${baseCn}__card-list`}>
        <Card className={`${baseCn}__card ${baseCn}--special-1`}>
          <h3 className="member-member__title">Collection</h3>
          <div className={`${baseCn}__image-pack`}>
            {collection.slice(0, 5).map(item => (
              <Image className={`${baseCn}__image-pack-item`} src={item.canonicalImage} key={item.id} />
            ))}
          </div>
        </Card>
        <Card className={`${baseCn}__card ${baseCn}--special-2`}>
          <h3 className="member-member__title">Wishlist</h3>
          <div className={`${baseCn}__image-pack`}>
            {wishlist.slice(0, 5).map(item => (
              <Image className={`${baseCn}__image-pack-item`} src={item.canonicalImage} key={item.id} />
            ))}
          </div>
        </Card>
        {!club && (
          <section>
            <ListTitle>Clubs</ListTitle>
            {clubs.map(club => (
              <Card key={club.id}>
                <ClubMini club={club} />
              </Card>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

export default MemberMini;