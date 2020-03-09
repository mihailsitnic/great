import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';
import CSSTransition from 'react-addons-css-transition-group'
import dataNav from './data'
import './styles.css'

class Sidebar extends Component {

  handleChangePath = () => {
    const path = this.props.location.pathname
    if (path.split('/').length === 4) {
      const redirect = path.split('/').slice(0, -1).join('/');
      this.props.history.push(redirect)
    }
  }

  render() {
    const { locationPath, tag, currentData } = this.props
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
              onClick={this.handleChangePath}
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
}

export default withRouter(Sidebar)