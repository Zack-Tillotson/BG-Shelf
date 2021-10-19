import React from 'react';
import cn from 'classnames'

import Club from 'molocules/Club'

import {member1} from '../../data'

function RenderClub() {
  return (
    <section>
      <h3 className="molocules__title">Club</h3>
      <div className="molocules__item">
        <Club club={member1.clubs[0]} />
      </div>
    </section>
  )
}

export default RenderClub;