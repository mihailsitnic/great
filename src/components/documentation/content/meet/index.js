import React, { Component, Fragment } from 'react';
import CSSTransition from 'react-addons-css-transition-group'
import './styles.css';

class Meet extends Component {

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Fragment>
        <CSSTransition
          transitionName = "article"
          transitionAppear
          transitionEnterTimeout = {1000}
          transitionLeaveTimeout = {1000}
          transitionAppearTimeout = {1000}
          component = "div"
        >
        <div>
          <header className="header">
            <div className="wrapper">
              <h1 className="header-title">Знакомство</h1>
            </div>
          </header>
          <nav className="nav-expenses row">
            <span className="nav-expenses__min col-6 --active">Минимум</span>
            <span
              className="nav-expenses__max col-6">Максимум</span>
          </nav>
        </div>
        </CSSTransition>
      </Fragment>
    );
  }
}

export default Meet;

