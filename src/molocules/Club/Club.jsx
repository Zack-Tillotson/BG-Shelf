import React from 'react'
import cn from 'classnames'
import {Link} from 'react-router-dom'

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
      <h1>{club.attributes.name}</h1>
      <section className="club-club__section">
        <ListTitle button={{type: 'link', children: "+ Add", to: "TODO"}}>
          Members
        </ListTitle>
        {club.members.map(member => (
          <Link key={member.id} to={`member/${member.id}/`}>
            <Card className="club-club__list-item">
              <MemberMini member={member} />
            </Card>
          </Link>
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