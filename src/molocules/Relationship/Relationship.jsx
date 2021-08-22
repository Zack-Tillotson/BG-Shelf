import React from 'react'
import cn from 'classnames'

import './component.scss'

import Button from 'atoms/Button'

const baseCn = 'relationship'

function ListTitle(props) {
  const {
    title,
    button,
    TitleEle = 'h2',
  } = props

  return (
    <div className={cn(baseCn)}>
      <ListTitle>{title}</ListTitle>
    </div>
  );
}

export default ListTitle;