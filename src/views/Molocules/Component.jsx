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
import RenderAcquisitions from './components/Acquisitions'
import RenderItem from './components/Item'
import RenderItemSelector from './components/ItemSelector'

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
      <section>
        <h2 className="molocules__section-title">Components</h2>
        <RenderItemSelector />
      </section>
      <h2 className="molocules__section-title">TODO</h2>
      {renderMolocule('SortAndFilter')}
      <section>
        <h2 className="molocules__section-title">Molocules</h2>
        <RenderItem />
        <RenderSession />
        <RenderAcquisitions />
        <RenderClubs />
        <RenderMember />
        <RenderMemberCard />
        <RenderSessionCard />
        <RenderItemCard />
        <RenderClubMini />
        <RenderRelationship />
        <RenderListTitle />
      </section>
      <section>
        <h2 className="molocules__section-title">Atoms</h2>
        <RenderCard />
        <RenderButton />
        <RenderSharpToggles />
        <RenderImages />
        <RenderFont />
      </section>
    </Page>
  );
}

export default Component;