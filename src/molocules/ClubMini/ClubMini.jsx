import React from 'react'
import cn from 'classnames'

import './component.scss'

const baseCn = 'club-mini'

function ClubMini(props) {
  const {
    club,
  } = props

  return (
    <div className={cn(baseCn)}>
      <h3>{club.name}</h3>
      <div className={cn(`${baseCn}__stats`)}>
        {club.members.length > 0 && (<
          div className={`${baseCn}__stat`}>{club.members.length} members</div>
        )}
        {club.sessions.length > 0 && (
          <div className={`${baseCn}__stat`}>{club.sessions.length} sessions</div>
        )}
      </div>
    </div>
  );
}

export default ClubMini;