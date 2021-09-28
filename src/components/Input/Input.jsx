import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

import actions from 'state/actions'
import useShapes from 'data/objectDb/useShapes';

import Image from './Image';
import Bool from './Bool';
import Text from './Text'

import formSelector from 'state/selectors/form'

function Input(props) {
  const {
    formName,
    ...restProps
  } = props

  const itemshapes = useShapes()

  const form = useSelector(formSelector)
  const dispatch = useDispatch()

  const shape = formName.split('.').reduce((shape, path) => shape[path], itemshapes)
  const value = formName.split('.').reduce((value = {}, path) => value[path], form)

  const onUpdate = value => dispatch(actions.formValuesUpdated({name: formName, value}))

  const inputProps = {...restProps, formName, shape, value, onUpdate}
  
  switch(shape.type) {
    case 'string': {
      return <Text {...inputProps} />
    }
    case 'boolean': {
      return <Bool {...inputProps} />
    }
    case 'image': {
      return <Image {...inputProps} />
    }
  }
  return 'Input type not supported (' + formName + ', ' + shape.type + ')'
}

export default Input;