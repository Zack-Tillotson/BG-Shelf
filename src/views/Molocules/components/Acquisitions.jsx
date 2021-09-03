import React from 'react';
import cn from 'classnames'

import Acquisitions from 'molocules/Acquisitions'

import {ownership1, item1, ownership2, item2, acquisitions1, acquisitions2} from './data'

function RenderOwnership() {

  return (
    <section>
      <h3 className="molocules__title">Acquisitions</h3>
      <div className="molocules__item">
        <h4 className="molocules__subtitle">View - Modifiable</h4>
        <Acquisitions 
          item={item1} 
          acquisitions={acquisitions1}
          modifiable
          onAdd={()=>console.log('add')} 
          onEdit={()=>console.log('edit')} 
          onDelete={()=>console.log('delete')} />
        <h4 className="molocules__subtitle">Form</h4>
        <Acquisitions form ownership={ownership1} item={item1} acquisitions={acquisitions1} />
        <h4 className="molocules__subtitle">Form With Item Select</h4>
        TODO
        <Acquisitions form itemSelect ownership={ownership1} acquisitions={acquisitions1} />
      </div>
      <div className="molocules__item">
        <h4 className="molocules__subtitle">View</h4>
        <Acquisitions item={item2} acquisitions={acquisitions2} />
        <h4 className="molocules__subtitle">Form</h4>
        <Acquisitions form item={item2} acquisitions={acquisitions2} />
      </div>
    </section>
  )
}

export default RenderOwnership;