import React from 'react'
import cn from 'classnames'

import './component.scss'

import AcquisitionsForm from './components/AcquisitionsForm'
import AcquisitionsView from './components/AcquisitionsView'

function Acquisitions(props) {
  const {
    form = false,
    ...rest
  } = props

  if(form) {
    return <AcquisitionsForm {...rest} />
  }

  return <AcquisitionsView {...rest} />
}

export default Acquisitions;