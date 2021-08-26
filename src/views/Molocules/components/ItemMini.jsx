import React from 'react';
import cn from 'classnames'

import Card from 'atoms/Card'
import ItemMini from 'molocules/ItemMini'

import {item1, item2, item3, member1, club1, ownership1, session1} from './data'

function renderItemMinis() {
  return (
    <section>
      <h3 className="molocules__title">Item Minis</h3>
      <div className="molocules__item">
        <ItemMini item={item1} member={member1} club={club1} ownership={ownership1} sessions={[session1]} />
      </div>
      <div className="molocules__item">
        <Card className="molocules--space-item">
          <ItemMini item={item1} member={member1} club={club1} ownership={ownership1} sessions={[session1]} />
        </Card>
        <Card className="molocules--space-item">
          <ItemMini item={item2} member={member1} club={club1} ownership={ownership1} sessions={[session1]} />
        </Card>
        <Card className="molocules--space-item">
          <ItemMini item={item3} member={member1} club={club1} ownership={ownership1} sessions={[session1]} />
        </Card>
      </div>
    </section>
  )
}

export default renderItemMinis;