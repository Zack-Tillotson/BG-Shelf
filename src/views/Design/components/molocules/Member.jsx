import React from 'react';
import cn from 'classnames'

import Member from 'molocules/Member'

import {member1, member2} from '../../data'

function RenderMember() {
  return (
    <section>
      <h3 className="molocules__title">Member</h3>
      <div className="molocules__item">
        <Member view="Board Game Piggy" member={member1} club={member1.clubs[0]} />
      </div>
      <div className="molocules__item">
        <Member view="Board Game Piggy" member={member2} club={member2.clubs[0]} />
      </div>
    </section>
  )
}

export default RenderMember;