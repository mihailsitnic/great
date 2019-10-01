import React, { Component, Fragment } from 'react';
import CSSTransition from 'react-addons-css-transition-group'
import Gallery from 'react-grid-gallery';
import './styles.css';
import IMAGES from './data'

class Description extends Component {
  state = {
    img1: null,
  }

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
              <h1 className="header-title">Фото</h1>
            </div>
          </header>
          <section className="paper">
            <div className="wrapper">
              <article className="article">
                <p className="paper__text">article1</p>
                
              </article>
              <Gallery images={IMAGES}/>
            </div>
          </section>
        </div>
        </CSSTransition>
        
      </Fragment>
    );
  }
}

export default Description;