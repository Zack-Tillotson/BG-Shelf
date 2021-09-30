import React, { useEffect } from 'react';
import cn from 'classnames'
import { useParams } from 'react-router';

import useInitGate from 'state/useInitGate'
import useAuth from 'data/auth/useAuth';
import useObjectDb from 'data/objectDb/useObjectDb';
import useUpdateObjectDb from 'data/objectDb/useUpdateObjectDb'
import Ref from 'data/objectDb/ref'

import Page from 'components/Page'
import Item from 'molocules/Item'

import './item-view.scss'

const baseCn = 'item-view'

function ItemView(props) {

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
  })

  const gate = useInitGate(member)
  const updateDb = useUpdateObjectDb()

  if(gate) return gate
  
  const item = [...member.collection, ...member.wishlist].find(item => item.id === itemId)

  if(!item) throw new Error('item not found on member collections')

  return (
    <Page className={baseCn}>
      <Item item={item} member={member} />
    </Page>
  );
}

export default ItemView