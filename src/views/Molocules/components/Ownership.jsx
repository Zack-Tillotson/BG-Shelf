import React from 'react';
import cn from 'classnames'

import Ownership from 'molocules/Ownership'

import {ownership1, item1, ownership2, item2, } from './data'

function RenderOwnership() {

  return (
    <section>
      <h3 className="molocules__title">Ownership</h3>
      <div className="molocules__item">
        <h4 className="molocules__subtitle">View</h4>
        <Ownership ownership={ownership1} item={item1} />
        <h4 className="molocules__subtitle">Form</h4>
        <Ownership form ownership={ownership1} item={item1} />
      </div>
      <div className="molocules__item">
        <h4 className="molocules__subtitle">View</h4>
        <Ownership ownership={ownership2} item={item2} />
        <h4 className="molocules__subtitle">Form</h4>
        <Ownership form ownership={ownership2} item={item2} />
      </div>
    </section>
  )
}

export default RenderOwnership;