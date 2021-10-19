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

  const item = useObjectDb({
    path: ['item', itemId],
    enabled: !!userId,
  })

  const gate = useInitGate(member, item)
  const updateDb = useUpdateObjectDb()

  if(gate) return gate

  const onToggleFavorite = () => {
    item.ownership.attributes.favorite = !item.ownership.attributes.favorite
    updateDb(item.ownership)
  }

  const onToggleCollection = () => {
    const itemIndex = member.collection.indexOf(item)
    if(itemIndex < 0) {
      member.collection.push(item)
    } else {
      member.collection.splice(itemIndex, 1)
    }
    updateDb(member)
  }
  
  const onToggleWishlist = () => {
    
  }

  const onAddSession = () => {
    
  }

  const onAddAquisition = () => {
    
  }

  const onEditAcquisition = () => {
    
  }

  const onDeleteAcquisition = () => {
    
  }

  const itemProps = {
    item, 
    member,
    
    onToggleFavorite,
    onToggleCollection,
    onToggleWishlist,
    onAddSession,
    onAddAquisition,
    onEditAcquisition,
    onDeleteAcquisition,
  }

  return (
    <Page className={baseCn}>
      <Item {...itemProps} />
    </Page>
  );
}

export default ItemView