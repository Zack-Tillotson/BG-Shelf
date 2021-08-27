import React from 'react'
import cn from 'classnames'

import './component.scss'

import ListTitle from 'molocules/ListTitle'
import Button from 'atoms/Button'

const baseCn = 'session'

function Session(props) {
  const {

  } = props

  return (
    <div className={cn(baseCn)}>
      Session {props.form ?'form' : 'view'} {props.formName}
    </div>
  );
}

export default Session;