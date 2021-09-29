import React from 'react';
import cn from 'classnames'

import useItemSelector from './useItemSelector'
import useItemLookup from './useItemLookup'

import Input from 'components/Input'
import ItemMini from 'molocules/ItemMini';
import Button from 'atoms/Button';

import './item-selector-pane.scss'

const baseCn = 'item-selector-pane'
const formName = 'itemselector'

function ItemSelectorPane(props) {
  const {
    onSelect,
    onClose,
    suggestions = [],
  } = props

  const results = useItemSelector(formName, {suggestions})
  const {lookupItem, isLoading} = useItemLookup()

  const handleBggItemClick = item => () => {
    lookupItem(item).then(fullItem => {
      handleItemFinish(fullItem)
    })
  }

  const handleItemClick = item => () => {
    handleItemFinish(item)
  }

  const handleItemFinish = item => {
    onSelect && onSelect(item)
    onClose()
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    results.bgg.onStartBggSearch()
  }

  return (
    <div className={cn(baseCn)} role="document" tabIndex="0">
      <form onSubmit={handleFormSubmit}>
        <h1>
          Select an item
        </h1>
        <section>
          <Input formName={formName} />
        </section>
        <section>
          {results.totalResults === 0 && (
            <div>Nothing from your collection</div>
          )}
          {results.groups.map(group => {
            if(group.results.length === 0) {
              return null
            }
            return (
              <section key={group.id}>
                <h3 className={`${baseCn}__result-group`}>{group.name}</h3>
                {group.results.map(item => (
                  <ItemMini key={item.id} item={item} showDetails={false} imageClassName={`${baseCn}__image--tiny`} onClick={handleItemClick(item)} />
                ))}
              </section>
            )
          })}
          {results.search && (
            <section>
              <h3>Search Board Game Geek</h3>
              <Button
                hollow={results.totalResults}
                primary={!results.totalResults}
                wide
                type="submit">
                  Search
              </Button>
              {isLoading && (
                'Loading...'
              )}
              {!isLoading && (
                <ul>
                  {results.bgg.results.map(item => (
                    <li className={`${baseCn}__bgg-item`} onClick={handleBggItemClick(item)} key={item.id}>
                      <span className={`${baseCn}__bgg-item-year`}>{item.attributes.year}</span>
                      <span className={`${baseCn}__bgg-item-name`}>{item.attributes.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}
        </section>
      </form>
    </div>
  )

}

export default ItemSelectorPane;