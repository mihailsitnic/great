import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import dataNav from './data'
import { Link, withRouter } from "react-router-dom";
import CSSTransition from 'react-addons-css-transition-group';
import './styles.css';

const Sidebar = props => {
  
  const locationPath = props.location.pathname.split('/')[2]
  const tag = props.location.pathname.split('/')[1]
  const value = props.data[tag]

  const renderNavList = () => {
    const dataNavList = dataNav
    .filter(x => x.tags.indexOf(tag || tag.filter) > -1)
    .map(item =>
        <li className="list__li" key={item.id}>
          <Link
            className={`list__link ${item.path === locationPath ? 'list__link--active' : ''}`}
            to={item.path}>
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
          <h3 className="logo">{value.author}</h3>
          {renderNavList()}
        </nav>
      </CSSTransition>
      </Fragment>
  );
};

const mapStateToProps = state => ({
  data: state.selectorData
})

export default connect(mapStateToProps)(withRouter(Sidebar))