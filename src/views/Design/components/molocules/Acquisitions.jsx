import React from 'react';
import cn from 'classnames'

import Acquisitions from 'molocules/Acquisitions'

import {member1} from '../../data'

function RenderOwnership() {
  const ownership1 = member1.ownerships[0]
  const ownership2 = member1.ownerships[1]

  return (
    <section>
      <h3 className="molocules__title">Acquisitions</h3>
      <div className="molocules__item">
        <h4 className="molocules__subtitle">View - Modifiable</h4>
        <Acquisitions
          ownership={ownership1}
          modifiable
          onAdd={()=>console.log('add')} 
          onEdit={()=>console.log('edit')} 
          onDelete={()=>console.log('delete')} />

        <h4 className="molocules__subtitle">Form</h4>
        <Acquisitions form ownership={ownership1} />

        <h4 className="molocules__subtitle">Form With Item Select</h4>
        TODO
        <Acquisitions form itemSelect ownership={ownership1} />
      </div>
      <div className="molocules__item">
        <h4 className="molocules__subtitle">View</h4>
        <Acquisitions ownership={ownership2} />

        <h4 className="molocules__subtitle">Form</h4>
        <Acquisitions form ownership={ownership2} />
      </div>
    </section>
  )
}

export default RenderOwnership;