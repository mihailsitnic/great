import React from 'react'
import CSSTransition from 'react-addons-css-transition-group'

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 className="title-h2">Loading...</h2>
  }

  return (
    <ul className='books__list'>
      <CSSTransition
        transitionName = "article"
        transitionAppear
        transitionEnterTimeout = {500}
        transitionLeaveTimeout = {500}
        transitionAppearTimeout = {500}
        component = "div"
      >
      {posts.map(item => (
        <li key={item.id} className="row book-item">
            <div className="col-3">
            <img className="book-img" src={item.img} alt={item.title} />
          </div>
          <div className="col-9">
            <h3 className="title-h4">{item.title}</h3>
            <p className="book-description">{item.description}</p>
          </div>
        </li>
      ))}
      </CSSTransition>
    </ul>
  )
}

export default Posts
