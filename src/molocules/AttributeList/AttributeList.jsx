import React from 'react'
import cn from 'classnames'

import useCollection from 'data/collection/useCollection'

import Image from 'atoms/Image'

import './attribute-list.scss'

const baseCn = 'attribute-list'

function getValue(attr, value, shape) {
  switch(shape.type) {
    case 'string': {
      if(!shape.unique && value instanceof Array) {
        return value.join(', ')
      }
      return value
    }
    default: {
      console.log('unsupported type', AttributeList, attr, shape, value)
      return '-'
    }
  }
}

function AttributeList(props) {
  const {
    object,
    position = 'full', // ['main', 'secondary', 'full', 'none']
    values,
    showEmpty = false,
    children,
  } = props

  const collection = useCollection()

  const {[object]: shape} = collection.shape

  const formAttrs = Object.keys(shape)
    .filter(attr => shape[attr].position === position)
    .filter(attr => !shape[attr].hidden)
    .filter(attr => showEmpty || getValue(attr, values[attr], shape[attr]))
    .sort((a, b) => ((shape[a].order || 999) - (shape[b].order || 999)))

  return (
    <div className={cn(`${baseCn}`)}>
      {formAttrs.map(attr => (
        <div key={attr} className={cn(`${baseCn}__attribute`)}>
          <div className={cn(`${baseCn}__label`)}>
            {shape[attr].copy}
          </div>
          <div className={cn(`${baseCn}__value`, `${baseCn}__string`)}>
            {getValue(attr, values[attr], shape[attr])}
          </div>
        </div>
      ))}
      {children}
    </div>
  )
}

export default AttributeList;