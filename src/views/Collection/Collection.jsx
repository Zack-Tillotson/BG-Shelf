import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import {Link} from 'react-router-dom'

import useInitGate from 'state/useInitGate'
import useAuth from 'data/auth/useAuth'
import useObjectDb from 'data/objectDb/useObjectDb'
import useUpdateObjectDb from 'data/objectDb/useUpdateObjectDb'
import Ref from 'data/objectDb/ref'

import { buildSelfMember, buildMemberItem } from 'data/objectCreator'

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

  const handleAddClick = data => {
    if(data.ref) {
      member.wishlist = member.wishlist.filter(item => !item.ref.equals(data.ref))
      member.collection.push(data)
    } else {
      const item = buildMemberItem(member, data)
      member.collection.push(item)
    }
    updateDb(member)
  }

  return (
    <Page className={baseCn}>
      <Relationship view="Collection" member={member} />
      <ItemSelector onSelect={handleAddClick} suggestions={['wishlist']} object={member} />

      {member.getCollection().map(item => (
        <Link key={item.id} to={`/app/item/${item.id}/`}>
          <Card >
            <ItemMini item={item} member={member} />
          </Card>
        </Link>
      ))}
    </Page>
  );
}

export default CollectionView