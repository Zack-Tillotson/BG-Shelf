import React from 'react';
import cn from 'classnames'

import Relationship from 'molocules/Relationship'

function renderListTitles() {

  return (
    <section>
      <hr />
      <h3 className="molocules__title">Relationship</h3>
      <div className="molocules__item">
        <h4 className="molocules__subtitle">Self</h4>
        <Relationship title="Some important view" />
      </div>

      <div className="molocules__item">
        <h4 className="molocules__subtitle">Club</h4>
        <Relationship title="Some important view" />
      </div>
    </section>
  )
}

export default renderListTitles;