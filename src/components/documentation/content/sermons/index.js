import React, { Component, Fragment } from 'react';
import CSSTransition from 'react-addons-css-transition-group'
import './styles.css';

class Mockups extends Component {
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
              <h1 className="header-title">Проповеди</h1>
            </div>
          </header>
          <section className="paper">
            <div className="wrapper">
              <article className="article">
                <p className="paper__text">article</p>
              </article>
            </div>
          </section>
        </div>
      </CSSTransition>
      </Fragment>
    );
  }
}

export default Mockups;