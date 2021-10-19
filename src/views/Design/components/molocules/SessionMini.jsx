import React from 'react';
import cn from 'classnames'

import Card from 'atoms/Card'
import SessionMini from 'molocules/SessionMini'

import {member1} from '../../data'

function renderSessionMinis() {
  const session1 = member1.clubs[0].sessions[0]
  const session2 = member1.clubs[0].sessions[1]

  return (
    <section>
      <h3 className="molocules__title">Session Minis</h3>
      <div className="molocules__item">
        <SessionMini session={session1} />
      </div>
      <div className="molocules__item">
        <SessionMini session={session1} Ele={Card} className="molocules--space-item" />
        <SessionMini session={session2} Ele={Card} noDate className="molocules--space-item" />
      </div>
    </section>
  )
}

export default renderSessionMinis;