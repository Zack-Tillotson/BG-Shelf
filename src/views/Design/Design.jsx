import React, { useState } from 'react';

import Page from 'components/Page'
import SharpToggle from 'atoms/SharpToggle'

import './component.scss'

// atoms
import RenderCard from './components/atoms/Card';
import RenderButton from './components/atoms/Button';
import RenderSharpToggles from './components/atoms/SharpToggle'
import RenderFont from './components/atoms/Font';
import RenderImages from './components/atoms/Image'

// molocules
import RenderListTitle from './components/molocules/ListTitle';
import RenderRelationship from './components/molocules/Relationship';
import RenderClubMini from './components/molocules/ClubMini';
import RenderMemberCard from './components/molocules/MemberMini';
import RenderSessionCard from './components/molocules/SessionMini';
import RenderItemCard from './components/molocules/ItemMini';
import RenderMember from './components/molocules/Member'
import RenderClubs from './components/molocules/Club'
import RenderSession from './components/molocules/Session'
import RenderAcquisitions from './components/molocules/Acquisitions'
import RenderItem from './components/molocules/Item'

const tabs = ['molocules', 'atoms']
function Component(props) {
  const [tab, updateTab] = useState(tabs[0])

  const handleTabUpdate = tab => event => updateTab(tab)

  return (
    <Page className="molocules">
      <div className="molocules__item molocules__tab-selector">
        {tabs.map(tabOption => (
          <SharpToggle key={tabOption} color="blue" onClick={handleTabUpdate(tabOption)} active={tab === tabOption}>{tabOption}</SharpToggle>
        ))}
      </div>
      {tab === 'molocules' && (
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
      )}
      {tab === 'atoms' && (
        <section>
          <h2 className="molocules__section-title">Atoms</h2>
          <RenderFont />
          <RenderButton />
          <RenderSharpToggles />
          <RenderCard />
          <RenderImages />
        </section>
      )}
    </Page>
  );
}

export default Component;