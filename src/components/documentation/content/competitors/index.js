import React, { Component, Fragment } from 'react';
import CSSTransition from 'react-addons-css-transition-group'
import './styles.css';

class Competitors extends Component {

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
                <h1 className="header-title">Беседы</h1>
              </div>
            </header>
            <section className="competitors">
              <div className="wrapper">
                <article className="article">
                  <p className="competitors__text">Lorem</p>
                </article>
              </div>
            </section>
          </div>
        </CSSTransition>
      </Fragment>
    );
  }
}

export default Competitors;