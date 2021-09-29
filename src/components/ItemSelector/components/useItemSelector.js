import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useShapes from 'data/objectDb/useShapes'
import formSelector from 'state/selectors/form'
import useNameLookup from './useNameLookup'

function nameFilter(input) {
  return item => item.attributes.name.toLowerCase().includes(input.toLowerCase())
}

function useItemSelector(formName, options) {
  const {
    object,
    suggestions,
  } = options

  const form = useSelector(formSelector)
  
  const shape = useShapes('itemselector')
  let suggestionGroups = []
  try {
    suggestionGroups = shape.suggestions
      .filter(suggestion => suggestions.length == 0 || suggestions.includes(suggestion.id))
      .map(suggestion => ({
        id: suggestion.id,
        name: suggestion.name,
        results: suggestion.objectPath.reduce((soFar, piece) => soFar[piece], object)
      }))
  } catch(e) {}

  const nameLookup = useNameLookup()
  const value = formName.split('.').reduce((value = {}, path) => value[path], form)

  const groups = suggestionGroups

  if(value) {
    groups.forEach(group => group.results = group.results.filter(nameFilter(value)))
  }

  const totalResults = groups.reduce((tot, group) => tot + group.results.length, 0)

  const onStartBggSearch = () => nameLookup.startLookup(value)
  const bggGroup = {
    id: 'bgg',
    name: 'Board Game Geek',
    results: nameLookup.games,
    onStartBggSearch,
  }

  return {
    search: value,
    totalResults,
    groups,
    bgg: bggGroup,
  }
}

export default useItemSelector