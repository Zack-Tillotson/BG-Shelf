import React, {useState} from 'react';
import cn from 'classnames'

import './component.scss'

function Component(props) {
  const {
    className,
    formName,
    shape,
    value,
    onUpdate,
  } = props

  const handleChange = event => onUpdate(!value)

  return (
    <label htmlFor={`${formName}-input`} className={cn('attributes__block', 'bool-input', '--button-like', className, {['--primary']: value, ['--hollow']: !value})}>
      {shape.copy}
      <input id={`${formName}-input`} type="checkbox" value={value ? 'checked' : ''} onChange={handleChange} className="bool-input__input" />
    </label>
  )
}

export default Component;