import React from 'react'
import cn from 'classnames'

import './component.scss'

import Button from 'atoms/Button'

const baseCn = 'atom-list-title'

function ListTitle(props) {
  const {
    children,
    button,
    showButton = !!button,
    TitleEle = 'h2',
    className,
  } = props

  return (
    <div className={cn(baseCn, className)}>
      <TitleEle className={cn(`${baseCn}__title`)}>{children}</TitleEle>
      {showButton && (
        <span>
            <Button {...button} />
        </span>
      )}
    </div>
  );
}

export default ListTitle;