import React, { useEffect } from 'react';
import cn from 'classnames'
import { useParams } from 'react-router';
import {Link} from 'react-router-dom'

import useInitGate from 'state/useInitGate'
import useAuth from 'data/auth/useAuth';
import useObjectDb from 'data/objectDb/useObjectDb';
import { buildSelfMember, buildMemberItem } from 'data/objectCreator';
import useUpdateObjectDb from 'data/objectDb/useUpdateObjectDb'
import Ref from 'data/objectDb/ref'

import Card from 'atoms/Card'

import Page from 'components/Page'
import ItemSelector from 'components/ItemSelector'

import Relationship from 'molocules/Relationship'
import ItemMini from 'molocules/ItemMini'

import './wishlist-view.scss'

const baseCn = 'wishlist-view'

function WishlistView(props) {

  const auth = useAuth()
  
  const {uid: userId, displayName} = auth.isInitialized ? auth.user : {}
  
  const {
    clubId = userId, 
    memberId = userId, 
    itemId,
  } = useParams()
  
  const member = useObjectDb({
    path: ['member', memberId],
    enabled: !!userId,
    createFunction: buildSelfMember,
    createParams: [userId, displayName]
  })

  const gate = useInitGate(member)
  const updateDb = useUpdateObjectDb()

  if(gate) return gate

  const handleAddClick = attributes => {
    const item = buildMemberItem(member, attributes)
    member.wishlist.push(item)
    updateDb(member)
  }

  return (
    <Page className={baseCn}>
      <Relationship view="Wishlist" member={member} />
      <ItemSelector onSelect={handleAddClick} />

      {member.wishlist.map(item => (
        <Link to={`/app/item/${item.id}/`} key={item.id}>
          <Card>
            <ItemMini item={item} member={member} />
          </Card>
        </Link>
      ))}
    </Page>
  );
}

export default WishlistView