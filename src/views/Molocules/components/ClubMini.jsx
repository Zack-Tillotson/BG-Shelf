import React from 'react';
import cn from 'classnames'

import Card from 'atoms/Card'
import ClubMini from 'molocules/ClubMini'

import {club1, club2} from './data/club'

function renderClubMinis() {
  return (
    <section>
      <hr />
      <h3 className="molocules__title">ClubMini</h3>
      <div className="molocules__item">
        <ClubMini club={club1} />
        <ClubMini club={club2} />
      </div>
      <div className="molocules__item">
        <Card>
          <ClubMini club={club1} />
        </Card>
      </div>
    </section>
  )
}

export default renderClubMinis;