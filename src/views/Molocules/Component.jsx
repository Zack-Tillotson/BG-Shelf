import React from 'react';
import cn from 'classnames'

import Page from 'components/Page'

import Card from 'atoms/Card'
import Button from 'atoms/Button'

import './component.scss'
import renderCards from './components/Card';
import renderButtons from './components/Button';

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
      {renderCards()}
      {renderButtons()}
    </Page>
  );
}

export default Component;