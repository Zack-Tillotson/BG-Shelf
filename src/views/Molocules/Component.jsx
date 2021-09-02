import React from 'react';

import useInitGate from 'state/useInitGate'
import Page from 'components/Page'

import './component.scss'

import RenderCard from './components/Card';
import RenderButton from './components/Button';
import RenderSharpToggles from './components/SharpToggle'
import RenderFont from './components/Font';


import RenderListTitle from './components/ListTitle';
import RenderRelationship from './components/Relationship';
import RenderClubMini from './components/ClubMini';
import RenderMemberCard from './components/MemberMini';
import RenderSessionCard from './components/SessionMini';
import RenderItemCard from './components/ItemMini';
import RenderMember from './components/Member'
import RenderImages from './components/Image'
import RenderClubs from './components/Club'
import RenderSession from './components/Session'
import RenderOwnership from './components/Ownership'

function renderMolocule(name) {
  return (
    <h3 className="molocules__todo">{name}</h3>
  )
}

function Component(props) {

  const gate = useInitGate()
  if(gate) return gate;

  return (
    <Page className="molocules">
      <h1 className="molocules__section-title">Molocules</h1>
      <RenderSession />
      <RenderOwnership />
      <RenderClubs />
      <RenderMember />
      <RenderMemberCard />
      <RenderSessionCard />
      <RenderItemCard />
      <RenderClubMini />
      <RenderRelationship />
      <RenderListTitle />
      <h2 className="molocules__section-title">TODO</h2>
      {renderMolocule('Item')}
      {renderMolocule('ItemSelector')}
      {renderMolocule('SortAndFilter')}
      <h2 className="molocules__section-title">Atoms</h2>
      <RenderCard />
      <RenderButton />
      <RenderSharpToggles />
      <RenderImages />
      <RenderFont />
    </Page>
  );
}

export default Component;