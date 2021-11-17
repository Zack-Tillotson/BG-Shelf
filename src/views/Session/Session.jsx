import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {useLocation, useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import useInitGate from 'state/useInitGate'
import useAuth from 'data/auth/useAuth'
import useObjectDb from 'data/objectDb/useObjectDb'
import useUpdateObjectDb from 'data/objectDb/useUpdateObjectDb'

import {Item} from 'data/objectCreator'

import { buildSelfMember, buildSession } from 'data/objectCreator'

import formSelector from 'state/selectors/form'
import actions from 'state/actions'

import Page from 'components/Page'
import Relationship from 'molocules/Relationship'
import Session from 'molocules/Session'

import './session-view.scss'

const baseCn = 'session-view'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SessionView(props) {
  
  const auth = useAuth()
  
  const {uid: userId, displayName} = auth.isInitialized ? auth.user : {}
  
  const {
    clubId, 
    sessionId,
  } = useParams()
  const query = useQuery()
  
  const {location} = props
  
  const itemId = query.get('itemId')
  
  const urlClub = useObjectDb({
    path: ['club', clubId],
    enabled: !!clubId,
  })
  
  const item = useObjectDb({
    path: ['item', itemId],
    enabled: !!itemId,
  })
  
  const selfMember = useObjectDb({
    path: ['member', userId],
    enabled: !!userId,
    createFunction: buildSelfMember,
    createParams: [userId, displayName]
  })
  
  const session = useObjectDb({
    path: ['session', sessionId],
    createFunction: buildSession,
    createParams: [item]
  })
  
  const gate = useInitGate(session, selfMember)
  const updateDb = useUpdateObjectDb()
  
  const formValues = useSelector(formSelector)['session']
  const dispatch = useDispatch()

  const history = useHistory()
  const [sessionItem, updateSessionItem] = useState(null)
  const [isForm, updateIsForm] = useState(!sessionId)
  
  if(gate) return gate
  
  const baseUrl = '/app' + (clubId ? `/club/${clubId}` : '')
  const club = urlClub || selfMember.clubs[0]
  
  const handleSubmit = () => {
    const {clubParticipants = [], ...restAttrs} = formValues
    session.attributes = restAttrs
    session.clubParticipants = Object.keys(clubParticipants)
      .filter(id => clubParticipants[id])
      .map(id => club.members.find(clubMember => clubMember.id === id))

    if(sessionItem) {
      session.item = sessionItem
    }
    
    if(sessionId) {
      updateDb(session)
    } else {
      club.sessions.push(session)
      
      updateDb(club)

      history.replace(`${baseUrl}/session/${session.id}`)
    }
    dispatch(actions.formInitialized())
    updateIsForm(false)
  }

  const handleItemSelect = data => {
    const item = data.ref ? data : new Item({id: data.bggId, attributes: data})
    updateSessionItem(item)
  }

  const handleEdit = () => {
    dispatch(actions.formInitialized(session.attributes))
    updateIsForm(true)
  }

  const handleDelete = () => {
    
  }

  const isClubMember = club.members.find(member => member.equals(selfMember))

  return (
    <Page className={baseCn}>
      <Relationship 
        view="Session"
        club={urlClub} />
      
      <Session
        form={isForm}
        itemSelect={!itemId}
        modifiable={isClubMember}
        item={sessionItem}
        club={club}
        session={session}
        member={selfMember}
        onItemSelect={handleItemSelect}
        onSubmit={handleSubmit}
        onEdit={handleEdit}
        onDelete={handleDelete} />

    </Page>
  );
}

export default SessionView