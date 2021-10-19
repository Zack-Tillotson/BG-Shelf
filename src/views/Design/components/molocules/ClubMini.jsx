import React from 'react';
import cn from 'classnames'

import Card from 'atoms/Card'
import ClubMini from 'molocules/ClubMini'

import {member1} from '../../data'

function renderClubMinis() {
  return (
    <section>
      <h3 className="molocules__title">ClubMini</h3>
      <div className="molocules__item">
        <ClubMini club={member1.clubs[0]} />
      </div>
      <div className="molocules__item">
        <Card>
          <ClubMini club={member1.clubs[0]} />
        </Card>
      </div>
    </section>
  )
}

export default renderClubMinis;