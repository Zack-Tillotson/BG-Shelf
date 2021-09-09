import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import cn from 'classnames'

import actions from 'state/actions'
import useCollection from 'data/collection/useCollection'

import './component.scss'

function Component(props) {
  const {
    className,
    formName,
    id,
    shape,
    value,
    onUpdate,
  } = props

  const handleChange = event => onUpdate(event.target.value)

  return (
    <div className={cn('component-input', className)}>
      {shape.copy && (<label htmlFor={`${formName}-input`} className="component-input__label">{shape.copy}</label>)}
      <input id={id || `${formName}-input`} type="text" value={value || ''} onChange={handleChange} className="component-input__input" placeholder={shape.placeholder} />
    </div>
  )
}

export default Component;