import React from 'react';
import cn from 'classnames'

import Page from 'components/Page'

import './component.scss'
import renderCards from './components/Card';
import renderButtons from './components/Button';
import renderListTitles from './components/ListTitle';
import renderRelationships from './components/Relationship';
import renderClubMinis from './components/ClubMini';

function renderMolocule(name) {
  return (
    <h3 className="molocules__todo">{name}</h3>
  )
}

function Component(props) {

  return (
    <Page className="molocules">
      <h1>Reusable Components</h1>
      {renderClubMinis()}
      {renderRelationships()}
      {renderListTitles()}
      <hr />
      {renderMolocule('Member')}
      {renderMolocule('MemberCard')}
      {renderMolocule('Item')}
      {renderMolocule('ItemCard')}
      {renderMolocule('Session')}
      {renderMolocule('SessionCard')}
      {renderMolocule('Ownership')}
      {renderMolocule('Club')}
      {renderMolocule('ItemSelector')}
      {renderMolocule('SortAndFilter')}
      <h2>Atoms</h2>
      {renderCards()}
      {renderButtons()}
    </Page>
  );
}

export default Component;