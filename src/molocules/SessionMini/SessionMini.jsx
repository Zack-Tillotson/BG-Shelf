import React from 'react'
import cn from 'classnames'

import './component.scss'

const baseCn = 'session-mini'

function SessionMini(props) {
  const {
    session,
    Ele = 'div',
    noDate = false,
  } = props

  const {item} = session

  return (
    <div className={cn(baseCn)}>
      {!noDate && (
        <h3 className={cn(`${baseCn}__date`)}>{session.date}</h3>
      )}
      <Ele className={cn(`${baseCn}__mini`)}>
        <div className={cn(`${baseCn}__image`)}>
          <div className={cn(`${baseCn}__image-wrapper`)}>
            <div className={cn(`${baseCn}__image-inner`)} style={{backgroundImage: `url("${item.canonicalImage}")`}} />
          </div>
        </div>
        <div className={cn(`${baseCn}__primary-attrs`)}>
          <div className={cn(`${baseCn}__year`)}>
            {item.releaseDate}
          </div>
          <h3 className={cn(`${baseCn}__name`)}>
            {item.name}
          </h3>
        </div>
        <div className={cn(`${baseCn}__participants`)}>
          <div className={cn(`${baseCn}__label`)}>Players</div>
          <div className={cn(`${baseCn}__value`)}>
            <span className={cn(`${baseCn}__inner`)}>
              {session.participants.join(', ')}
            </span>
          </div>
        </div>
      </Ele>
    </div>
  );
}

export default SessionMini;