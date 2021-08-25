import React from 'react';
import cn from 'classnames'

import Card from 'atoms/Card'
import SessionMini from 'molocules/SessionMini'

import {club1} from './data'

function renderSessionMinis() {
  return (
    <section>
      <hr />
      <h3 className="molocules__title">Session Minis</h3>
      <div className="molocules__item">
        <SessionMini club={club1} />
      </div>
      <div className="molocules__item">
      </div>
    </section>
  )
}

export default renderSessionMinis;