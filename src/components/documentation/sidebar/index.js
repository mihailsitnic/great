import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import CSSTransition from 'react-addons-css-transition-group'
import { Link } from "react-router-dom";
import dataNav from './data'
import './styles.css';

class Sidebar extends Component {

  renderNavList = () => {
    let id
    switch (this.props.path) {
      case "a":
        id = 0;
        break;
      case "b":
        id = 1;
        break;
      case "c":
        id = 2;
        break;
      case "d":
        id = 3;
        break;
      default:
        id = 0;
    }
    const meet = this.props.data;
    const key = Object.keys(meet)[id];
    const value = meet[key]
    const tag = value.selector;
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
      </ul>
    )
  }

  render() {
    let id
    switch (this.props.path) {
      case "a":
        id = 0;
        break;
      case "b":
        id = 1;
        break;
      case "c":
        id = 2;
        break;
      case "d":
        id = 3;
        break;
      default:
        id = 0;
    }
    const meet = this.props.data;
    const key = Object.keys(meet)[id];
    const value = meet[key]
    const logoName = value.author
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
  location: state.currentLocation,
  data: state.selectorData,
})

export default connect(mapStateToProps)(Sidebar)