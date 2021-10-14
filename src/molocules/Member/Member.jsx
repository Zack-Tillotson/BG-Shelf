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
    collection,
    wishlist,
    clubs,
  } = member

  return (
    <div className={cn(baseCn)}>
      <Relationship view={view} club={club} member={member} />
      <div className={`${baseCn}__card-list`}>
        <Link to="collection">
          <Card className={`${baseCn}__card ${baseCn}--special-1`}>
            <h3 className="member-member__title">Collection</h3>
            <div className={`${baseCn}__image-pack`}>
              {collection.slice(0, 4).map(item => (
                <figure key={item.id} className={`${baseCn}__image-pack-item`}>
                  <figcaption className={`${baseCn}__image-pack-name`}>{item.attributes.name}</figcaption>
                  <Image className={`${baseCn}__image-pack-image`} src={item.attributes.canonicalImage} />
                </figure>
              ))}
            </div>
          </Card>
        </Link>
        <Link to="wishlist">
          <Card className={`${baseCn}__card ${baseCn}--special-2`}>
            <h3 className="member-member__title">Wishlist</h3>
            <div className={`${baseCn}__image-pack`}>
              {wishlist.slice(0, 4).map(item => (
                <div key={item.id} className={`${baseCn}__image-pack-item`}>
                  <div className={`${baseCn}__image-pack-name`}>{item.attributes.name}</div>
                  <Image className={`${baseCn}__image-pack-image`} src={item.attributes.canonicalImage} />
                </div>
              ))}
            </div>
          </Card>
        </Link>
        {!club && (
          <section>
            <ListTitle>Clubs</ListTitle>
            {clubs.map((club, index) => (
              <Link key={club.id || index} to={`/app/club/${club.id}/`}>
                <Card>
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