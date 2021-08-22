import React from 'react';
import cn from 'classnames'

import ListTitle from 'molocules/ListTitle'

function renderListTitles() {

  return (
    <section>
      <hr />
      <h3 className="molocules__title">ListTitle</h3>
      <div className="molocules__item">
        <ListTitle>No Button Title</ListTitle>
        <ListTitle button={{type: 'link', children: "Add", to: "."}}>Really Long Title with an Add button</ListTitle>
      </div>
    </section>
  )
}

export default renderListTitles;