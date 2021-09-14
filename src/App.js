import React, {Suspense} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import {Provider} from 'react-redux'

import Molecules from 'views/Molocules'
import Member from 'views/Member';
import Landing from 'views/Landing';

import FileNotFound from 'molocules/FileNotFound'
import Skeleton from 'molocules/Skeleton'

import useAuth from 'data/auth/useAuth'

function Hack(props) {
  if(props && props.history) window.hackHistory = props.history;
  return null
}

function App({store}) {
  const auth = useAuth()

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Hack} />{/*A hack way to access the Browser Route in Saga files*/}
        <Suspense fallback={<Skeleton />}>
          <Switch>
            <Route path="/molocules/" exact component={Molecules} />
            <Route path="/app/" exact component={Member} />
            <Route path="/" exact component={Landing} />
            <Route component={FileNotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
