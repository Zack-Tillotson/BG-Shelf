import React, { useEffect } from 'react';
import cn from 'classnames'
import { useParams } from 'react-router';
import {Link} from 'react-router-dom'

import useInitGate from 'state/useInitGate'
import useAuth from 'data/auth/useAuth';
import useObjectDb from 'data/objectDb/useObjectDb';
import { buildSelfMember, buildOwnership } from 'data/objectCreator';
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

  const urlClub = useObjectDb({
    path: ['club', clubId],
    enabled: !!clubId,
  })

  const gate = useInitGate(member)
  const updateDb = useUpdateObjectDb()

  if(gate) return gate

  const handleAddClick = data => {
    if(data.ref) { // Selection from our ownership items
      const ownership = member.getOwnership(data)
      ownership.attributes.wishlist = true
      updateDb(ownership)
    } else {
      const ownership = buildOwnership(member, data)
      ownership.attributes.wishlist = true

      member.ownerships.push(ownership)
      updateDb(member)
    }
  }

  const baseUrl = '/app' + (clubId ? `/club/${clubId}` : '')

  return (
    <Page className={baseCn}>
      <Relationship 
        view="Wishlist"
        member={member} 
        club={urlClub} 
        button={{Element: ItemSelector, onSelect: handleAddClick, suggestions: ['wishlist'], object: member}} />

      {member.getWishlist().map(ownership => (
        <Link key={ownership.id} to={`${baseUrl}/item/${ownership.item.id}/`}>
          <Card >
            <ItemMini item={ownership.item} member={member} ownership={ownership} />
          </Card>
        </Link>
      ))}
    </Page>
  );
}

export default WishlistView