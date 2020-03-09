import React from 'react'
import Player from '../player'
import CSSTransition from 'react-addons-css-transition-group'
import { HashLink as Link } from 'react-router-hash-link';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 className="title-h2">Loading...</h2>
  }

  return (
    <ul className='audio__list' id="top">
      <CSSTransition
        transitionName = "article"
        transitionAppear
        transitionEnterTimeout = {500}
        transitionLeaveTimeout = {500}
        transitionAppearTimeout = {500}
        component = "div"
      >
      {posts.map(item => (
        <li key={item.id} className="audio__li">
            <h3 className="title-h3">{item.title}</h3>
            <Link to="#top" className="audio__link">
              <Player
                tracks={item.player}
                key={item.id}
              />
            </Link>
        </li>
      ))}
      </CSSTransition>
    </ul>
  )
}

export default Posts