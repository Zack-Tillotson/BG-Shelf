import React from 'react';
import cn from 'classnames'

import Session from 'molocules/Session'

import {member1} from '../../data'

function RenderSession() {

  const session1 = member1.clubs[0].sessions[0]

  return (
    <section>
      <h3 className="molocules__title">Session</h3>
      <div className="molocules__item">
        <h4 className="molocules__subtitle">View - Modifiable</h4>
        <Session
          session={session1} 
          modifiable 
          onEdit={()=>console.log('edit')} 
          onDelete={()=>console.log('delete')} />
        <h4 className="molocules__subtitle">View</h4>
        <Session session={session1} />
      </div>
      <div className="molocules__item">
        <h4 className="molocules__subtitle">Form</h4>
        <Session form session={session1} />
      </div>
    </section>
  )
}

export default RenderSession;