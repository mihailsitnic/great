import React, { Component } from 'react';
import { connect } from 'react-redux'
import { matchPath, locationPath } from './redux/AC'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home'
import Meet from './components/documentation/content/meet'
import Wrapper from './components/documentation/wrapper'
import Videos from './components/documentation/content/video'
import Books from './components/documentation/content/books'
import Audio from './components/documentation/content/audio'
import './App.css';

class App extends Component {

  render() {
    const Child = ({ match, location }) => {
      const matchAction = matchPath(match.params.id)
      const locationAction = locationPath(location.pathname)
      this.props.dispatch(matchAction)
      this.props.dispatch(locationAction)
      return <div />
    }

    const { path } = this.props
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Wrapper>
            <Route path={`/${path}/meet`} component={Meet} />
            <Route path={`/${path}/video`} component={Videos} />
            <Route path={`/${path}/audio`} component={Audio} />
            <Route path={`/${path}/books`} component={Books} />
            <Route path="/:id" component={Child}/>
          </Wrapper>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  path: state.currentPath
})

export default connect(mapStateToProps)(App)