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
          <section className="paper">
          <div className="wrapper">
            <article className="article">
              <h4 className="title-h4">Беседа о любви</h4>
              <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/28URJrqur1Q"
                  frameBorder="0"
                  title="Беседа о любви"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
              />
            </article>
          </div>
        </section>
        </div>
        </CSSTransition>
      </Fragment>
    );
  }
}

export default Meet;

