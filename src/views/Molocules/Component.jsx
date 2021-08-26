import React from 'react';
import cn from 'classnames'

import Page from 'components/Page'

import './component.scss'

import renderCard from './components/Card';
import renderButton from './components/Button';
import renderSharpToggles from './components/SharpToggle'

import renderListTitle from './components/ListTitle';
import renderRelationship from './components/Relationship';
import renderClubMini from './components/ClubMini';
import renderMemberCard from './components/MemberMini';
import renderSessionCard from './components/SessionMini';
import renderItemCard from './components/ItemMini';

function renderMolocule(name) {
  return (
    <h3 className="molocules__todo">{name}</h3>
  )
}

function Component(props) {

  return (
    <Page className="molocules">
      <h1>Reusable Components</h1>
      {renderMemberCard()}
      {renderSessionCard()}
      {renderItemCard()}
      {renderClubMini()}
      {renderRelationship()}
      {renderListTitle()}
      <hr />
      {renderMolocule('Member')}
      {renderMolocule('Item')}
      {renderMolocule('Session')}
      {renderMolocule('Ownership')}
      {renderMolocule('Club')}
      {renderMolocule('ItemSelector')}
      {renderMolocule('SortAndFilter')}
      <h2>Atoms</h2>
      {renderCard()}
      {renderButton()}
      {renderSharpToggles()}
    </Page>
  );
}

export default Component;