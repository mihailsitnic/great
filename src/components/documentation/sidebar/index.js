import React, { Fragment } from 'react'
import { withRouter } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';
import CSSTransition from 'react-addons-css-transition-group'
import dataNav from './data'
import './styles.css'

function Sidebar(props) {

  const handleChangePath = () => {
    const path = props.location.pathname
    if (path.split('/').length === 4) {
      const redirect = path.split('/').slice(0, -1).join('/');
      props.history.push(redirect)
    }
  }

  const { locationPath, tag, currentData } = props
  const renderNavList = () => {
    const dataNavList = dataNav
    .filter(x => x.tags.indexOf(tag || tag.filter) > -1)
    .map(item =>
        <li className="list__li" key={item.id}>
          <Link
            className={
              `list__link
              ${item.path === locationPath ?
              'list__link--active' :
              ''}`
            }
            onClick={handleChangePath}
            to={item.path}
          >
            {item.text}
          </Link>
        </li>
      )
      
    return (
      <ul className="list">
        {dataNavList}
      </ul>
    )
  }

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
        <nav>
          <h3 className="logo">{currentData.author}</h3>
          {renderNavList()}
        </nav>
      </CSSTransition>
      </Fragment>
  )
}

export default withRouter(Sidebar)