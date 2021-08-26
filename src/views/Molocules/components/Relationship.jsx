import React from 'react';
import cn from 'classnames'

import Relationship from 'molocules/Relationship'

import {club1} from './data'

function renderListTitles() {

  return (
    <section>
      <h3 className="molocules__title">Relationship</h3>
      <div className="molocules__item">
        <h4 className="molocules__subtitle">Self</h4>
        <Relationship view="Collection" />
      </div>

      <div className="molocules__item">
        <h4 className="molocules__subtitle">Club</h4>
        <Relationship view="Collection" club={club1} member={club1.members[0]} />
      </div>
    </section>
  )
}

export default renderListTitles;