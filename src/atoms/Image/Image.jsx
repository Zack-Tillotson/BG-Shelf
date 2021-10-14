import React, { useState } from 'react'
import cn from 'classnames'

import './component.scss'

const baseCn = 'atom-image'

function Image(props) {
  const {
    className,
    src,
  } = props
  
  const [animationDealy] = useState(Math.random() * 8)

  return (
    <div className={cn(baseCn, className)} style={{[`--animation-delay`]: animationDealy + 's'}}>
      <div className={cn(`${baseCn}__inner`)} style={{backgroundImage: `url("${src}")`}} />
    </div>
  );
}

export default Image;