import React from 'react'
import cn from 'classnames'

import './component.scss'

import Form from './components/SessionForm'
import View from './components/SessionView'

function Session(props) {
  const {
    form = false,
    ...rest
  } = props

  if(form) {
    return <Form {...rest} />
  }

  return <View {...rest} />
}

export default Session;