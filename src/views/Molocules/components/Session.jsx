import React from 'react';
import cn from 'classnames'

import Session from 'molocules/Session'

import {session1} from './data'

function RenderSession() {

  return (
    <section>
      <h3 className="molocules__title">Session</h3>
      <div className="molocules__item">
        <Session />
      </div>
      <div className="molocules__item">
        <Session form formName={`session-${session1.id}`} session={session1} />
      </div>
    </section>
  )
}

export default RenderSession;