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
              <blockquote className="blockquote" cite="http://www.alexandrmen.ru/">
                <p className="blockquote__p">Я просто верю, что истина у Бога и она превосходит мое понимание и она прекрасна. Мне лично этого достаточно.</p>
                <footer className="blockquote__footer">—Александр Мень, <cite className="blockquote__cite">Из письма к Ю.Н.Рейтлингер</cite></footer>
            </blockquote>
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

