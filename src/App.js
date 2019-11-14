import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import existingRoutes from './redux/constants/existingRoutes'
import Home from './components/home'
import Meet from './components/documentation/content/meet'
import Wrapper from './components/documentation/wrapper'
import Videos from './components/documentation/content/video'
import Books from './components/documentation/content/books'
import Audio from './components/documentation/content/audio'
import PageNotFound from './components/home/404'
import './App.css';

class App extends Component {

  render() {

    const { location } = this.props
    const isExistingRout = existingRoutes.indexOf(location) !== -1

    return (
      <Router>
        {true ? (
          <Switch>
            <Route exact path='/' component={Home} />
            <Wrapper>
              <Route path={`/:path/meet`} component={Meet} />
              <Route path={`/:path/video`} component={Videos} />
              <Route path={`/:path/audio/:id`} component={Audio} />
              <Route path={`/:path/books`} component={Books} />
            </Wrapper>
          </Switch>
        ) : (
          <Switch>
            <Route path='/404' component={PageNotFound} />
            <Redirect from={location} to='/404' />
          </Switch>
        )}
        
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  path: state.currentPath
})

export default connect(mapStateToProps)(App)