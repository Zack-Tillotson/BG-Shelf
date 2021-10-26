import React, {Suspense} from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"
import {Provider} from 'react-redux'

import Design from 'views/Design'
import DesignComponents from 'views/DesignComponents'
import Landing from 'views/Landing'

import Member from 'views/Member'
import Collection from 'views/Collection'
import Wishlist from 'views/Wishlist'
import Item from 'views/Item'
import Club from 'views/Club'
import Session from 'views/Session'

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

            {/* No club, implicit self Club */}
            <Route path="/app/" exact component={Member} />
            <Route path="/app/collection/" exact component={Collection} />
            <Route path="/app/wishlist/" exact component={Wishlist} />
            <Route path="/app/item/:itemId" exact component={Item} />
            <Route path="/app/session/:sessionId?" exact component={Session} />

            {/* Club specific */}
            <Route path="/app/club/:clubId/" exact component={Club} />
            <Route path="/app/club/:clubId/member/:memberId/" exact component={Member} />
            <Route path="/app/club/:clubId/member/:memberId/collection/" exact component={Collection} />
            <Route path="/app/club/:clubId/member/:memberId/wishlist/" exact component={Wishlist} />
            <Route path="/app/club/:clubId/item/:itemId/" exact component={Item} />
            <Route path="/app/club/:clubId/session/:sessionId?" exact component={Session} />

            <Route path="/" exact component={Landing} />
            <Route path="/design/" exact component={Design} />
            <Route path="/app/design/" exact component={DesignComponents} />
            
            <Route component={FileNotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
