import React from 'react'
import cn from 'classnames'

import './component.scss'

const baseCn = 'session-mini'

function SessionMini(props) {
  const {
    club,
  } = props

  return (
    <div className={cn(baseCn)}>
      SessionMini
    </div>
  );
}

export default SessionMini;