import React from 'react'
import cn from 'classnames'

import Card from 'atoms/Card'
import Image from 'atoms/Image'

import Relationship from 'molocules/Relationship'
import ListTitle from 'molocules/ListTitle'
import ClubMini from 'molocules/ClubMini'

import './component.scss'

import leftPiggy from 'assets/board-game-piggy/left-piggy.png'
import rightPiggy from 'assets/board-game-piggy/right-piggy.png'

const baseCn = 'member-member'

function MemberMini(props) {
  const {
    view,
    member,
    club,
  } = props

  return (
    <div className={cn(baseCn)}>
      <Relationship view={view} club={club} member={member} />
      <div className={`${baseCn}__card-list`}>
        <Card className={`${baseCn}__card ${baseCn}__card--left`} style={{backgroundImage: `url(${leftPiggy})`}}>
          <h3 className="member-member__title">Collection</h3>
        </Card>
        <Card className={`${baseCn}__card`} style={{backgroundImage: `url(${rightPiggy})`}}>
          <h3 className="member-member__title">Wishlist</h3>
        </Card>
        <ListTitle>Clubs</ListTitle>
        {member.clubs.map(club => (
          <Card key={club.id}>
            <ClubMini club={club} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default MemberMini;