import React from 'react';
import cn from 'classnames'

import Relationship from 'molocules/Relationship'

import {member1} from '../../data'

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
        <Relationship view="Collection" club={member1.clubs[0]} member={member1} />
      </div>
    </section>
  )
}

export default renderListTitles;