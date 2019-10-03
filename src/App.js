import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment } from './redux/AC'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home'
import Meet from './components/documentation/content/meet'
import Wrapper from './components/documentation/wrapper'
import Confession from './components/documentation/content/confession'
import Videos from './components/documentation/content/video'
import Sermons from './components/documentation/content/sermons'
import Books from './components/documentation/content/books'
import Audio from './components/documentation/content/audio'
import Interview from './components/documentation/content/interview'
import Letters from './components/documentation/content/letters'
import Heritage from './components/documentation/content/heritage'
import Lectures from './components/documentation/content/lectures'
import Competitors from './components/documentation/content/competitors'
import './App.css';

class App extends Component {
  render() {
    const Child = ({ match }) => {
      const action = increment(match.params.id)
      this.props.dispatch(action)
      return <div />
    }
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Wrapper>
            <Route path="/meet" component={Meet} />
            <Route path="/video" component={Videos} />
            <Route path="/audio" component={Audio} />
            <Route path="/books" component={Books} />
            <Route path="/sermons" component={Sermons} />
            <Route path="/confession" component={Confession} />
            <Route path="/lectures" component={Lectures} />
            <Route path="/conversations" component={Competitors} />
            <Route path="/interview" component={Interview} />
            <Route path="/letters" component={Letters} />
            <Route path="/heritage" component={Heritage} />
            <Route path="/:id" component={Child}/>
          </Wrapper>
        </Switch>
      </Router>
    );
  }
}

export default connect()(App)
