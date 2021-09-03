import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import cn from 'classnames'

import useCollection from 'data/collection/useCollection'
import Input from 'components/Input'

import './component.scss'

function InputList(props) {
  const {
    className,
    object,
  } = props

  const collection = useCollection()

  const {[object]: shape} = collection.shape

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