import React from 'react';
import cn from 'classnames'

import Ownership from 'molocules/Ownership'

import {ownership1, item1} from './data'

function RenderOwnership() {

  return (
    <section>
      <h3 className="molocules__title">Ownership</h3>
      <div className="molocules__item">
        <Ownership ownership={ownership1} item={item1} />
      </div>
      <div className="molocules__item">
        <Ownership form formName={`ownership-${ownership1.id}`} ownership={ownership1} item={item1} />
      </div>
    </section>
  )
}

export default RenderOwnership;