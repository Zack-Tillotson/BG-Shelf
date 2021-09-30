import React from 'react';
import cn from 'classnames'

import Session from 'molocules/Session'

import {session1} from '../../data'

function RenderSession() {

  return (
    <section>
      <h3 className="molocules__title">Session</h3>
      <div className="molocules__item">
        <h4 className="molocules__subtitle">View - Modifiable</h4>
        <Session 
          item={session1.item} 
          session={session1} 
          modifiable 
          onEdit={()=>console.log('edit')} 
          onDelete={()=>console.log('delete')} />
        <h4 className="molocules__subtitle">View</h4>
        <Session item={session1.item} session={session1} />
      </div>
      <div className="molocules__item">
        <h4 className="molocules__subtitle">Form</h4>
        <Session form session={session1} item={session1.item} />
      </div>
    </section>
  )
}

export default RenderSession;