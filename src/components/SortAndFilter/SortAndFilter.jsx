import React from 'react';
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux';

import Button from 'atoms/Button'

import actions from 'state/actions'
import formSelector from 'state/selectors/form'

import './sort-filter.scss'

const baseCn = 'sort-filter'
const formName = 'sort-filter'

const sortOptions = [{
  value: 'name',
  copy: 'Name',
  getValue: item => item.properties.name.toLowerCase(),
  defaultValue: '',
}, {
  value: 'favorite',
  copy: 'Favorite',
  getValue: item => item.ownership.favorite ? -1 : 1,
  defaultValue: 0,
}, {
  value: 'acquired',
  copy: 'Date Acquired',
  getValue: item => item.purchases[0].properties.dateAcquired,
  defaultValue: '',
  reverse: true,
}, {
  value: 'released',
  copy: 'Date Released',
  getValue: item => item.properties.releaseDate,
  defaultValue: '',
  reverse: true,
},{
  value: 'played',
  copy: 'Played Recently',
  getValue: item => item.sessions[item.sessions.length - 1].properties.date,
  defaultValue: '',
  reverse: true,
}]

function SortAndFilter(props) {
  
  const dispatch = useDispatch()
  let {[formName]: value} = useSelector(formSelector)
  if(!value) {
    value =  sortOptions[0].value
  }

  const sortOrder = sortOptions.find(option => option.value === value)

  const handleSortChange = event => dispatch(actions.formValuesUpdated({name: formName, value: event.target.value}))

  return (
    <div className={`${baseCn}`}>
      <label htmlFor="sort-options" className={`${baseCn}__control-label`}>Sort By</label>
      <Button
        Element="select" 
        name="sort-options" 
        id="sort-options" 
        className={`${baseCn}__select`}
        onChange={handleSortChange}
        value={sortOrder.value}>
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.copy}
          </option>
        ))}
      </Button>
  </div>
  )
}

export default SortAndFilter;