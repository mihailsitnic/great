import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import CSSTransition from 'react-addons-css-transition-group'
import { Link } from "react-router-dom";
import dataNav from './data'
import './styles.css';

class Sidebar extends Component {

  handleExit = () => {
    localStorage.setItem('storage', null)
  }

  renderNavList = () => {
    const tag = JSON.parse(localStorage.getItem('storage')).selector;
    const path = `/${this.props.path}/`;
    const dataNavList = dataNav
    .filter(x => x.tags.indexOf(tag || tag.filter) > -1)
    .map(item =>
        <li className="list__li" key={item.id}>
          <Link
            className={`list__link ${path + item.path === this.props.location ? 'list__link--active' : ''}`}
            to={item.path}>
            {item.text}
          </Link>
        </li>
      )
    return (
      <ul className="list">
        {dataNavList}
        <li className="list__li">
          <Link
            onClick={this.handleExit}
            className="list__link"
            to="/">
            Выйти
          </Link>
        </li>
      </ul>
    )
  }

  render() {
    const logoName = JSON.parse(localStorage.getItem('storage')).logoName;
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
          <h3 className="logo">{logoName}</h3>
          {this.renderNavList()}
        </nav>
      </CSSTransition>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  path: state.currentPath,
  location: state.currentLocation
})

export default connect(mapStateToProps)(Sidebar)