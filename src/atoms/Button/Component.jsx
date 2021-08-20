import React from 'react'
import cn from 'classnames'
import {Link} from 'react-router-dom'

import './component.scss'

const baseCn = 'atom-button'
const ELE_TYPE_MAP = {
  button: 'button',
  anchor: 'a',
  link: Link,
}

function Button(props) {
  const {
    className,
    children,
    type = 'button',
    Element = ELE_TYPE_MAP[type],
    primary = false,
    secondary = false,
    hollow = false,
    disabled = false,
    wide = false,
    tight = false,
  } = props
  
  const fullClassName =  cn(
    baseCn, 
    className,
    {
      [`${baseCn}--primary`]: primary,
      [`${baseCn}--secondary`]: secondary,
      [`${baseCn}--hollow`]: hollow,
      [`${baseCn}--disabled`]: disabled,
      [`${baseCn}--wide`]: wide,
      [`${baseCn}--tight`]: tight,
    },
  )

  return (
    <Element className={fullClassName}>
      {children}
    </Element>
  );
}

export default Button;