import React from 'react';
import cn from 'classnames'

import Card from 'atoms/Card'
import MemberMini from 'molocules/MemberMini'

import {member1, member2} from '../../data'

function renderMemberMinis() {
  return (
    <section>
      <h3 className="molocules__title">Member Minis</h3>
      <div className="molocules__item">
        <MemberMini member={member1} />
        <MemberMini member={member2} showButton buttonText="Invite" />
      </div>
      <div className="molocules__item">
        <Card className="molocules--space-item">
          <MemberMini member={member1} />
        </Card>
        <Card className="molocules--space-item">
          <MemberMini member={member2} />
        </Card>
        <Card className="molocules--space-item">
          <MemberMini member={member1} />
        </Card>
        <Card className="molocules--space-item">
          <MemberMini member={member2} showButton />
        </Card>
      </div>
    </section>
  )
}

export default renderMemberMinis;