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
    clubId, 
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

  const urlClub = useObjectDb({
    path: ['club', clubId],
    enabled: !!clubId,
  })

  const gate = useInitGate(member, item)
  const updateDb = useUpdateObjectDb()

  if(gate) return gate

  const ownership = member.getOwnership(item)
  const club = urlClub || member.clubs[0]

  const onToggleFavorite = () => {
    ownership.attributes.favorite = !ownership.attributes.favorite
    updateDb(ownership)
  }

  const onToggleCollection = () => {
    ownership.attributes.collection = !ownership.attributes.collection
    updateDb(ownership)
  }
  
  const onToggleWishlist = () => {
    ownership.attributes.wishlist = !ownership.attributes.wishlist
    updateDb(ownership)
  }

  const onAddSession = () => {
    
  }

  const onAddAquisition = () => {
    
  }

  const onEditAcquisition = () => {
    
  }

  const onDeleteAcquisition = () => {
    
  }

  const isClubMember = !!club.members.find(clubMember => clubMember.equals(member))
  const baseUrl = '/app' + (clubId ? `/club/${clubId}` : '')

  const itemProps = {
    item, 
    ownership,
    club,

    baseUrl,
    modifiable: isClubMember,
    
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