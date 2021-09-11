import React from 'react'
import cn from 'classnames'

import Card from 'atoms/Card'

import ListTitle from 'molocules/ListTitle'
import MemberMini from 'molocules/MemberMini'
import SessionMini from 'molocules/SessionMini'

import './component.scss'

const baseCn = 'club-club'

function Club(props) {
  const {
    club,
  } = props

  return (
    <div className={cn(baseCn)}>
      <h1>{club.name}</h1>
      <section className="club-club__section">
        <ListTitle button={{type: 'link', children: "+ Add", to: "TODO"}}>
          Members
        </ListTitle>
        {club.members.map(member => (
          <Card key={member.id} className="club-club__list-item">
            <MemberMini member={member} />
          </Card>
        ))}
      </section>
      <section className="club-club__section">
        <ListTitle button={{type: 'link', children: "+ Add", to: "TODO"}}>
          Sessions
        </ListTitle>
        {club.sessions.map(session => (
          <Card key={session.id} className="club-club__list-item">
            <SessionMini session={session} />
          </Card>
        ))}
      </section>
    </div>
  );
}

export default Club;