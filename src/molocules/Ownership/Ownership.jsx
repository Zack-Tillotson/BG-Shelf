import React from 'react'
import cn from 'classnames'

import './component.scss'

import OwnershipForm from './components/OwnershipForm'
import OwnershipView from './components/OwnershipView'

function Ownership(props) {
  const {
    form = false,
    ...rest
  } = props

  if(form) {
    return <OwnershipForm {...rest} />
  }

  return <OwnershipView {...rest} />
}

export default Ownership;