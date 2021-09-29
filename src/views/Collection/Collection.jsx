import React, { useEffect } from 'react'
import { useParams } from 'react-router'

import useInitGate from 'state/useInitGate'
import useAuth from 'data/auth/useAuth'
import useObjectDb from 'data/objectDb/useObjectDb'
import useUpdateObjectDb from 'data/objectDb/useUpdateObjectDb'

import { buildSelfMember } from 'data/objectCreator'

import Card from 'atoms/Card'

import Page from 'components/Page'
import ItemSelector from 'components/ItemSelector'

import Relationship from 'molocules/Relationship'
import ItemMini from 'molocules/ItemMini'

import './collection-view.scss'

const baseCn = 'collection-view'

function CollectionView(props) {

  const gate = useInitGate()
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

  const updateDb = useUpdateObjectDb()

  if(gate) return gate

  const handleAddClick = item => {
    member.collection.push(item)
    updateDb(member)
  }

  return (
    <Page className={baseCn}>
      <Relationship view="Collection" member={member} />
      <ItemSelector onSelect={handleAddClick} suggestions={['wishlist']} object={member} />

      {member.collection.map(item => (
        <Card key={item.id}>
          <ItemMini item={item} member={member} />
        </Card>
      ))}
    </Page>
  );
}

export default CollectionView