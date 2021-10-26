import React, {useEffect, useRef, useState} from 'react';
import { useParams } from 'react-router'
import cn from 'classnames'

import useInitGate from 'state/useInitGate'
import useAuth from 'data/auth/useAuth'
import useObjectDb from 'data/objectDb/useObjectDb'

import { buildSelfMember } from 'data/objectCreator';

import Button from 'atoms/Button'

import './component.scss'

function Component(props) {
  const {
    className,
    formName,
    id,
    shape,
    value = {},
    onUpdate,
    focus = false, // focus on mount
  } = props

  const auth = useAuth()
  
  const {uid: userId, displayName} = auth.isInitialized ? auth.user : {}
  
  const {
    clubId,
  } = useParams()

  const urlClub = useObjectDb({
    path: ['club', clubId],
    enabled: !!clubId,
  })

  const selfMember = useObjectDb({
    path: ['member', userId],
    enabled: !!userId,
    createFunction: buildSelfMember,
    createParams: [userId, displayName]
  })

  const gate = useInitGate(selfMember)
  
  const inputRef = useRef()
  useEffect(() => {
    if(focus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef.current])
  
  if(gate) return gate
  
  const club = urlClub || selfMember.clubs[0]
  const handleClick = member => event => {
    event.preventDefault()
    onUpdate({...value, [member.id]: !value[member.id]})
  }

  return (
    <div className={cn('component-input', className)}>
      {shape.copy && (<label htmlFor={`${formName}-input`} className="component-input__label">{shape.copy}</label>)}
      <div className={cn('component-input__member-list')}>
        {club.members.map(member => (
          <Button key={member.ref.doc} onClick={handleClick(member)} primary={value[member.id]} hollow={!value[member.id]}>{member.attributes.name}</Button>
        ))}
      </div>
    </div>
  )
}

export default Component;