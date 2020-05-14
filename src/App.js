import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Home from './components/home'
import Meet from './components/documentation/content/meet'
import Wrapper from './components/documentation/wrapper'
import Videos from './components/documentation/content/video'
import Books from './components/documentation/content/books'
import Audio from './components/documentation/content/audio'
import Page404 from './components/home/404'
import './App.css'

function App() {
    return (
      <>
        <Router>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path="/404" component={Page404} />
              <Wrapper>
                <Switch>
                  <Route path={`/:path/meet`} component={Meet} />
                  <Route path={`/:path/video/:id`} component={Videos} />
                  <Route path={`/:path/audio/:id`} component={Audio} />
                  <Route path={`/:path/books/:id`} component={Books} />
                  <Route component={Page404} />
                </Switch>
                <Switch>
                  <Redirect strict from="/:path/video" to="/:path/video/1" />
                  <Redirect strict from="/:path/audio" to="/:path/audio/1" />
                  <Redirect strict from="/:path/books" to="/:path/books/1" />
                </Switch>
              </Wrapper>
            </Switch>
        </Router>
      </>
    )
}

export default App