import React from 'react';
import cn from 'classnames'

import Card from 'atoms/Card'
import MemberMini from 'molocules/MemberMini'

import {member1} from './data'

function renderMemberMinis() {
  return (
    <section>
      <hr />
      <h3 className="molocules__title">Member Minis</h3>
      <div className="molocules__item">
        <MemberMini member={member1} />
      </div>
      <div className="molocules__item">

      </div>
    </section>
  )
}

export default renderMemberMinis;