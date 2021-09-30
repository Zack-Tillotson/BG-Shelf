import React, {useEffect, useRef, useState} from 'react';
import cn from 'classnames'

import './component.scss'

function Component(props) {
  const {
    className,
    formName,
    id,
    shape,
    value,
    onUpdate,
    focus = false, // focus on mount
  } = props

  const inputRef = useRef()
  useEffect(() => {
    if(focus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef.current])

  const handleChange = event => onUpdate(event.target.value)

  return (
    <div className={cn('component-input', className)}>
      {shape.copy && (<label htmlFor={`${formName}-input`} className="component-input__label">{shape.copy}</label>)}
      <input id={id || `${formName}-input`} ref={inputRef} type="text" value={value || ''} onChange={handleChange} className="component-input__input" placeholder={shape.placeholder} />
    </div>
  )
}

export default Component;