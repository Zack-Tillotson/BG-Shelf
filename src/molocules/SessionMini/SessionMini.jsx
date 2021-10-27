import React from 'react'
import cn from 'classnames'

import AttributeList from 'molocules/AttributeList'

import './component.scss'

const baseCn = 'session-mini'

function SessionMini(props) {
  const {
    session,
    Ele = 'div',
    noHeader = false,
    noDate = false,
    className = '',
  } = props

  const {item} = session

  return (
    <div className={cn(baseCn, className)}>
      {!noDate && (
        <h3 className={cn(`${baseCn}__date`)}>{session.attributes.date}</h3>
      )}
      <Ele className={cn(`${baseCn}__mini`)}>
        {!noHeader && (
          <div className={cn(`${baseCn}__image`)}>
            <div className={cn(`${baseCn}__image-wrapper`)}>
              <div className={cn(`${baseCn}__image-inner`)} style={{backgroundImage: `url("${item.attributes.canonicalImage}")`}} />
            </div>
          </div>
        )}
        {!noHeader && (
          <div className={cn(`${baseCn}__primary-attrs`)}>
            <div className={cn(`${baseCn}__year`)}>
              {item.attributes.releaseDate}
            </div>
            <h3 className={cn(`${baseCn}__name`)}>
              {item.attributes.name}
            </h3>
          </div>
        )}
        <div className={cn(`${baseCn}__secondary-attrs`)}>
          <AttributeList object="session" values={{...session.attributes, clubParticipants: session.clubParticipants}} position="secondary" />
        </div>
      </Ele>
    </div>
  );
}

export default SessionMini;