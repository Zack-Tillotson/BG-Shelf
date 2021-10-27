import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import {useLocation, useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux'

import useInitGate from 'state/useInitGate'
import useAuth from 'data/auth/useAuth'
import useObjectDb from 'data/objectDb/useObjectDb'
import useUpdateObjectDb from 'data/objectDb/useUpdateObjectDb'

import { buildSelfMember, buildSession } from 'data/objectCreator'

import formSelector from 'state/selectors/form'

import Page from 'components/Page'
import ItemSelector from 'components/ItemSelector'

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
  const query = useQuery();
  
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

  const history = useHistory()

  
  if(gate) return gate
  
  const baseUrl = '/app' + (clubId ? `/club/${clubId}` : '')
  const club = urlClub || selfMember.clubs[0]
  
  const handleSubmit = () => {
    const {clubParticipants, ...restAttrs} = formValues
    session.attributes = restAttrs
    session.clubParticipants = Object.keys(clubParticipants)
      .filter(id => clubParticipants[id])
      .map(id => club.members.find(clubMember => clubMember.id === id))
    
    if(sessionId) {
      console.log('form submitted - existing session', session)
      updateDb(session)
    } else {
      club.sessions.push(session)
      console.log('form submitted - new session', club)
      
      updateDb(club)

      history.replace(`${baseUrl}/session/${session.id}`)
    }
  }

  const isForm = !sessionId
  const isClubMember = club.members.find(member => member.equals(selfMember))

  return (
    <Page className={baseCn}>
      <Relationship 
        view="Session" 
        club={urlClub} />
      
      <Session form={isForm} modifiable={isClubMember} session={session} club={club} onSubmit={handleSubmit} />

    </Page>
  );
}

export default SessionView