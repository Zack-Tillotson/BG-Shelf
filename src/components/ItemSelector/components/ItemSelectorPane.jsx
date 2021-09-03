import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import cn from 'classnames'

import actions from 'state/actions'
import useCollection from 'data/collection/useCollection'

import formSelector from 'state/selectors/form'

import './item-selector.scss'
import classNames from 'classnames';

const baseCn = 'item-selector'
const formName = 'itemselector'

function ItemSelectorPane(props) {
  const {
    isOpen,
    onSelect,
  } = props
  const collection = useCollection()

  const form = useSelector(formSelector)
  const dispatch = useDispatch()

  const shape = formName.split('.').reduce((shape, path) => shape[path], collection.shape)
  const value = formName.split('.').reduce((value = {}, path) => value[path], form)

  const onUpdate = value => dispatch(actions.formValuesUpdated({name: formName, value}))

  return (
    <div className={cn(baseCn)} >
      <div>Item Selector</div>
    </div>
  )

}

export default ItemSelectorPane;