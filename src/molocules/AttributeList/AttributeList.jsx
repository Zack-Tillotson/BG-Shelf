import React from 'react'
import cn from 'classnames'

import useShapes from 'data/objectDb/useShapes'

import Image from 'atoms/Image'

import './attribute-list.scss'

const baseCn = 'attribute-list'

function getValue(attr, value, shape, joiner = ', ') {

  // A value for not-unique things is the join of the various pieces
  if(!shape.unique && value instanceof Array) {
    return value.map(piece => getValue(attr, piece, shape)).join(joiner)
  }
  switch(shape.type) {
    case 'string': {
      return value
    }
    case 'member': {
      return !value ? '' : value.attributes.name
    }
    case 'number': {
      return Number(value)
    }
    case 'date': { // TODO
      return value
    }
    case 'image': { // TODO
      return value
    }
    default: {
      console.log('unsupported type', 'AttributeList', attr, shape, value)
      return '-'
    }
  }
}

function AttributeList(props) {
  const {
    object,
    position, // ['main', 'secondary', 'full', 'none']
    values,
    showEmpty = false,
    additionalAttrs = [],
  } = props

  const shape = useShapes(object)

  const formAttrs = Object.keys(shape)
    .map(attr => ({
      shape: shape[attr],
      label: shape[attr].copy, 
      value: getValue(attr, values[attr], shape[attr])
    }))
    .filter(({shape}) => shape.position === position || !position && shape.position !== 'none')
    .filter(({shape}) => !shape.hidden)
    .filter(({value}) => showEmpty || value)
    .sort(({shape: a}, {shape: b}) => ((a.order || 999) - (b.order || 999)))

  const fullAttrs = [...additionalAttrs, ...formAttrs]

  return (
    <div className={cn(`${baseCn}`)}>
      {fullAttrs.map(attr => [(
        <div key={`${attr}-label`} className={cn(`${baseCn}__label`)}>
          {attr.label}
        </div>
      ), (
        <div key={`${attr}-value`} className={cn(`${baseCn}__value`, `${baseCn}__string`)}>
          {attr.value || '-'}
        </div>
      )])}
    </div>
  )
}

export default AttributeList;