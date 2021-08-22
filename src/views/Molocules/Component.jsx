import React from 'react';
import cn from 'classnames'

import Page from 'components/Page'

import './component.scss'
import renderCards from './components/Card';
import renderButtons from './components/Button';
import renderListTitles from './components/ListTitle';
import renderRelationships from './components/Relationship';

function renderMolocule(name) {
  return (
    <h3 className="molocules__todo">{name}</h3>
  )
}

function Component(props) {

  return (
    <Page className="molocules">
      <h1>Reusable Components</h1>
      {renderMolocule('Member')}
      {renderMolocule('MemberCard')}
      {renderMolocule('Item')}
      {renderMolocule('ItemCard')}
      {renderMolocule('Session')}
      {renderMolocule('SessionCard')}
      {renderMolocule('Ownership')}
      {renderRelationships()}
      {renderListTitles()}
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