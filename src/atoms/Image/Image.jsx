import React from 'react'
import cn from 'classnames'

import './component.scss'

const baseCn = 'atom-image'

function Image(props) {
  const {
    className,
    src,
  } = props
  

  return (
    <div className={cn(baseCn, className)}>
      <div className={cn(`${baseCn}__inner`)} style={{backgroundImage: `url("${src}")`}} />
    </div>
  );
}

export default Image;