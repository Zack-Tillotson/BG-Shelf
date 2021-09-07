import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import cn from 'classnames'

import actions from 'state/actions'
import useCollection from 'data/collection/useCollection'
import useItemSelector from './useItemSelector'

import Input from 'components/Input'
import ItemMini from 'molocules/ItemMini';
import Button from 'atoms/Button';

import formSelector from 'state/selectors/form'
import './item-selector-pane.scss'

const baseCn = 'item-selector-pane'
const formName = 'itemselector'

function ItemSelectorPane(props) {
  const {
    onSelect,
    onClose,
  } = props

  const results = useItemSelector(formName)

  const handleItemClick = item => () => {
    onSelect && onSelect(item)
    onClose()
  }

  return (
    <div className={cn(baseCn)} role="document" tabIndex="0">
      <h1>
        Select an item
      </h1>
      <section>
        <Input formName={formName} />
      </section>
      <section>
        <h2>Results</h2>
        {results.totalResults === 0 && (
          <div>No results</div>
        )}
        {results.groups.map(group => {
          if(group.results.length === 0) {
            return null
          }
          return (
            <section key={group.id}>
              <h3 className={`${baseCn}__result-group`}>{group.name}</h3>
              {group.results.map(item => (
                <ItemMini key={item.id} item={item} showDetails={false} onClick={handleItemClick(item)} />
              ))}
            </section>
          )
        })}
        {results.search && (
          <section>
            <h3>or search Board Game Geek</h3>
            <Button
              hollow={results.totalResults}
              primary={!results.totalResults}
              onClick={results.bgg.onStartBggSearch}>
                Search
            </Button>
            {results.bgg.results.map(item => (
              <div onClick={handleItemClick(item)} key={item.id}>
                {item.year} - {item.name}
              </div>
            ))}
          </section>
        )}
      </section>
    </div>
  )

}

export default ItemSelectorPane;