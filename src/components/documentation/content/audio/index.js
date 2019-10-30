import React, { Component, Fragment } from 'react';
import CSSTransition from 'react-addons-css-transition-group'
import { Link } from 'react-router-dom';
import Player1 from './01'
import Player2 from './02'
import pagination from './pagination'
import './styles.css';

class Audio extends Component {
  state = {
    pageId: 'a'
  }

  setPage = id => this.setState({ pageId: id })

  render() {
    const { pageId } = this.state
    const audioPlayer_1 = pageId === 'a' && <Player1 />
    const audioPlayer_2 = pageId === 'b' && <Player2 />
    const paginationNav = pagination.map(item =>
      <li className="pagination__li col" key={item.id}>
        <Link
          className="pagination__link"
          to={item.path}
          onClick={() => this.setPage(item.pageId)}>
            {item.number}
          </Link>
      </li>
    )
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
        <section className="pagination-section">
          <header className="header">
            <div className="wrapper">
              <h1 className="header-title">Аудио</h1>
            </div>
          </header>
          <section className="paper">
            <div className="wrapper">
              <article className="article">
                {audioPlayer_1}
                {audioPlayer_2}
              </article>
            </div>
          </section>
          <nav className="nav-expenses row">
            <ul className="pagination__list row">
              {paginationNav}
            </ul>
          </nav>
        </section>
        </CSSTransition>
      </Fragment>
    );
  }
}

export default Audio;