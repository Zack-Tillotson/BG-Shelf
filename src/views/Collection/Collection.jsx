import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import {Link} from 'react-router-dom'

import useInitGate from 'state/useInitGate'
import useAuth from 'data/auth/useAuth'
import useObjectDb from 'data/objectDb/useObjectDb'
import useUpdateObjectDb from 'data/objectDb/useUpdateObjectDb'

import { buildSelfMember, buildOwnership } from 'data/objectCreator'

import Card from 'atoms/Card'

import Page from 'components/Page'
import ItemSelector from 'components/ItemSelector'

import Relationship from 'molocules/Relationship'
import ItemMini from 'molocules/ItemMini'

import './collection-view.scss'

const baseCn = 'collection-view'

function CollectionView(props) {

  const auth = useAuth()
  
  const {uid: userId, displayName} = auth.isInitialized ? auth.user : {}
  
  const {
    clubId, 
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

  const handleAddClick = data => {
    if(data.ref) { // Selection from our ownership items
      const ownership = member.getOwnership(data)
      ownership.attributes.collection = true
      updateDb(ownership)
    } else {
      const ownership = buildOwnership(member, data)
      ownership.attributes.collection = true

      member.ownerships.push(ownership)
      updateDb(member)
    }
  }

  return (
    <Page className={baseCn}>
      <Relationship view="Collection" member={member} />
      <ItemSelector onSelect={handleAddClick} suggestions={['wishlist']} object={member} />

      {member.getCollection().map(ownership => (
        <Link key={ownership.id} to={`/app/item/${ownership.item.id}/`}>
          <Card >
            <ItemMini item={ownership.item} member={member} ownership={ownership} />
          </Card>
        </Link>
      ))}
    </Page>
  );
}

export default CollectionView