import React from 'react';
import cn from 'classnames'

import Page from 'components/Page'

import './component.scss'

import renderCard from './components/Card';
import renderButton from './components/Button';
import renderSharpToggles from './components/SharpToggle'
import renderFont from './components/Font';


import renderListTitle from './components/ListTitle';
import renderRelationship from './components/Relationship';
import renderClubMini from './components/ClubMini';
import renderMemberCard from './components/MemberMini';
import renderSessionCard from './components/SessionMini';
import renderItemCard from './components/ItemMini';
import renderMember from './components/Member'
import renderImages from './components/Image'
import renderClubs from './components/Club'
import renderSession from './components/Session'
import renderOwnership from './components/Ownership'

function renderMolocule(name) {
  return (
    <h3 className="molocules__todo">{name}</h3>
  )
}

function Component(props) {

  return (
    <Page className="molocules">
      <h1 className="molocules__section-title">Molocules</h1>
      {renderSession()}
      {renderOwnership()}
      {renderClubs()}
      {renderMember()}
      {renderMemberCard()}
      {renderSessionCard()}
      {renderItemCard()}
      {renderClubMini()}
      {renderRelationship()}
      {renderListTitle()}
      <h2 className="molocules__section-title">TODO</h2>
      {renderMolocule('Item')}
      {renderMolocule('ItemSelector')}
      {renderMolocule('SortAndFilter')}
      <h2 className="molocules__section-title">Atoms</h2>
      {renderCard()}
      {renderButton()}
      {renderSharpToggles()}
      {renderImages()}
      {renderFont()}
    </Page>
  );
}

export default Component;