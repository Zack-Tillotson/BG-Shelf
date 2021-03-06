import React, { useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';

import cn from 'classnames'

import Page from 'components/Page'

import './landing.scss'
import hero from 'assets/bgshelf/logo-400x400.webp'

import useAuth from 'data/auth/useAuth'
import useInitGate from 'state/useInitGate'

function Landing(props) {

  const auth = useAuth()
  const gate = useInitGate()
  
  let history = useHistory();

  useEffect(() => {
    if(auth.isInitialized && auth.isLoggedIn) {
      history.push('/app/')
    }
  }, [auth.isInitialized, auth.isLoggedIn])

  if(gate) return gate

  return (
    <Page isHeadShown={false}>
      <div className="landing">
        <h1 className="subtitle">Board Game Shelf</h1>
        <div className="landing__hero">
          <img src={hero} />
        </div>
        <div className="landing__controls">
          <Link to="/app/" className="--button-like --primary --wide">Open App</Link>
        </div>
        <div className="landing__explanation">
          <p>Keep track of your board games, it's fun and free!</p>
        </div>
      </div>
    </Page>
  );
}

export default Landing