import React from 'react';
import cn from 'classnames'

import useShapes from 'data/objectDb/useShapes'
import Input from 'components/Input'

import './component.scss'

function InputList(props) {
  const {
    className,
    object,
  } = props

  const shape = useShapes(object)

  const formAttrs = Object.keys(shape)
    .filter(attr => !shape[attr].hidden)
    .sort((a, b) => ((shape[a].order || 999) - (shape[b].order || 999)))

  return (
    <div className={cn('input-list', className)}>
      {formAttrs.map(key => {
        const property = shape[key]
        return (
          <Input key={key} className={cn('input-list__block', `input-list__${key}`)} formName={`${object}.${key}`} />
        )
      })}
    </div>
  )
}

export default InputList;