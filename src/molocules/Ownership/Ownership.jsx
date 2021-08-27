import React from 'react'
import cn from 'classnames'

import './component.scss'

import OwnershipForm from './components/OwnershipForm'
import OwnershipView from './components/OwnershipView'

function Ownership(props) {
  const {
    form = false,
  } = props

  if(form) {
    return <OwnershipForm {...props} />
  }

  return <OwnershipView {...props} />
}

export default Ownership;