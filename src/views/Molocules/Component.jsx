import React from 'react';
import cn from 'classnames'

import Page from 'components/Page'

import Card from 'atoms/Card'
import Button from 'atoms/Button'

import './component.scss'

const longLorumIpsum = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

function renderMember() {
  return 'Member'
}

function renderMemberMini() {
  return 'MemberMini'
}

function renderMemberCard() {
  return 'MemberCard'
}

function renderItem() {
  return 'Item'
}

function renderItemMini() {
  return 'Item'
}

function renderItemCard() {
  return 'ItemCard'
}

function renderSession() {
  return 'Session'
}

function renderSessionCard() {
  return 'SessionCard'
}

function renderOwnership() {
  return 'Ownership'
}

function renderRelationship() {
  return 'Relationship'
}

function renderListTitle() {
  return 'ListTitle'
}

function renderClub() {
  return 'Club'
}

function renderClubCard() {
  return 'ClubCard'
}

function renderItemSelector() {
  return 'ItemSelector'
}

function renderSortAndFilter() {
  return 'SortAndFilter'
}

function renderMolocule(name) {
  return (
    <section>
      <h3>{name}</h3>
      {renderMoloculeContent(name)}
    </section>
  )
}

function renderMoloculeContent(name) {
  switch(name) {
    case 'Member': return renderMember()
    case 'MemberCard': return renderMemberCard()
    case 'Item': return renderItem()
    case 'ItemCard': return renderItemCard()
    case 'Session': return renderSession()
    case 'SessionCard': return renderSessionCard()
    case 'Ownership': return renderOwnership()
    case 'Relationship': return renderRelationship()
    case 'ListTitle': return renderListTitle()
    case 'Club': return renderClub()
    case 'ClubCard': return renderClubCard()
    case 'ItemSelector': return renderItemSelector()
    case 'SortAndFilter': return renderSortAndFilter()
    default: return 'No render method available: ' + name
  }
}

function renderCard(variant) {
  let content = null
  
  if(variant === 'standard') {
    content = variant
  }

  if(variant === 'withheader') {
    content = (
      <div>
        <h3>Lorum Ipsum</h3>
        <p>{longLorumIpsum}</p>
      </div>
    )
  }

  return (
    <Card>{content}</Card>
  )
}

function renderButton(variant) {
  
  if(variant === 'standard') {
    return (
      <Button>{variant}</Button>
    )
  }

  if(variant === 'primary') {
    return (
      <Button primary>{variant}</Button>
    )
  }

  if(variant === 'secondary') {
    return (
      <Button secondary>{variant}</Button>
    )
  }

  if(variant === 'hollow') {
    return (
      <Button hollow>{variant}</Button>
    )
  }

  if(variant === 'tight') {
    return (
      <Button tight>{variant}</Button>
    )
  }

  if(variant === 'wide') {
    return (
      <Button wide>{variant}</Button>
    )
  }

}

function renderAtom(name, ...variants) {
  return (
    <section>
      <h3>{name}</h3>
        {renderAtomContent(name, variants.length > 0 ? variants : ['standard'])}
    </section>
  )
}

function renderAtomContent(name, variants) {
  return variants.map(variant => {
    switch(name) {
      case 'Card': return renderCard(variant)
      case 'Button': return renderButton(variant)
    }
  }).map(content => (
    <div className="molocules__item">
      {content}
    </div>
  ))
}

function Component(props) {

  return (
    <Page className="molocules">
      <h1 className="molocules__title">Reusable Components</h1>
      <h2>Molocules</h2>
      {renderMolocule('Member')}
      {renderMolocule('MemberCard')}
      {renderMolocule('Item')}
      {renderMolocule('ItemCard')}
      {renderMolocule('Session')}
      {renderMolocule('SessionCard')}
      {renderMolocule('Ownership')}
      {renderMolocule('Relationship')}
      {renderMolocule('ListTitle')}
      {renderMolocule('Club')}
      {renderMolocule('ClubCard')}
      {renderMolocule('ItemSelector')}
      {renderMolocule('SortAndFilter')}
      <h2>Atoms</h2>
      {renderAtom('Card', 'standard', 'withheader')}
      {renderAtom('Button', 'standard', 'primary', 'secondary', 'hollow', 'minimal', 'tight', 'wide', 'disabled')}
    </Page>
  );
}

export default Component;