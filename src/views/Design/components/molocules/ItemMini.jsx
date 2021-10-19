import React from 'react';
import cn from 'classnames'

import Card from 'atoms/Card'
import ItemMini from 'molocules/ItemMini'

import {member1} from '../../data'

function renderItemMinis() {
  return (
    <section>
      <h3 className="molocules__title">Item Minis</h3>
      <div className="molocules__item">
        <ItemMini item={member1.ownerships[0].item} member={member1} club={member1.clubs[0]} />
      </div>
      <div className="molocules__item">
        {member1.ownerships.map((ownership, index) => (
          <Card key={index} className="molocules--space-item">
            <ItemMini item={ownership.item} member={member1} club={member1.clubs[0]} />
          </Card>
        ))}
      </div>
    </section>
  )
}

export default renderItemMinis;