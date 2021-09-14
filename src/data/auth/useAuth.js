import React from 'react'
import {useState, useEffect} from 'react'
import firebase from 'firebase'

import Login from 'components/Login'
import Page from 'components/Page'
import Skeleton from 'molocules/Skeleton'

import {subscribe, getCurrentAuthData, logout} from './index'

function renderLoginPage() {
  return (
    <Page className="login-page">
      Begin by logging in.
      <Login />
    </Page>
  )
}

function renderLoadingPage() {
  return (
    <Skeleton />
  )
}

function useAuth() {

  const [data, updateData] = useState(getCurrentAuthData())
  
  useEffect(() => {
    return subscribe(updateData)
  }, [])
  
  return {
    ...data,
    renderLoadingPage,
    renderLoginPage,
    logout,
  }
}

export default useAuth