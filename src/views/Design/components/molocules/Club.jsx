import React from 'react';
import cn from 'classnames'

import Club from 'molocules/Club'

import {member1, member2, club1} from '../../data'

function RenderClub() {
  return (
    <section>
      <h3 className="molocules__title">Club</h3>
      <div className="molocules__item">
        <Club club={club1} />
      </div>
    </section>
  )
}

export default RenderClub;