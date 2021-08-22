import React from 'react'
import cn from 'classnames'

import './component.scss'

import Button from 'atoms/Button'

const baseCn = 'atom-list-title'

function ListTitle(props) {
  const {
    children,
    button,
    TitleEle = 'h2',
  } = props

  return (
    <div className={cn(baseCn)}>
      <TitleEle className={cn(`${baseCn}__title`)}>{children}</TitleEle>
      {!!button && (
        <span>
            <Button {...button} />
        </span>
      )}
    </div>
  );
}

export default ListTitle;