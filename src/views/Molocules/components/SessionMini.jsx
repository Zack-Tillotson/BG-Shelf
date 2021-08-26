import React from 'react';
import cn from 'classnames'

import Card from 'atoms/Card'
import SessionMini from 'molocules/SessionMini'

import {item1, item2, item3, member1, club1, ownership1, session1, session2} from './data'

function renderSessionMinis() {
  return (
    <section>
      <hr />
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