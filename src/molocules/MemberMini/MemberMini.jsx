import React from 'react'
import cn from 'classnames'

import './component.scss'

const baseCn = 'member-mini'

function MemberMini(props) {
  const {
    club,
  } = props

  return (
    <div className={cn(baseCn)}>
      Member Mini
    </div>
  );
}

export default MemberMini;