import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import CSSTransition from 'react-addons-css-transition-group'
import { Link } from "react-router-dom";
import dataNav from './data'
import './styles.css';

class Sidebar extends Component {
  state = {
    filter: 'alexandermen'
  }

  handleClick1 = () => {
    this.setState({
      filter: 'alexandermen'
    })
    localStorage.setItem('test', 'alexandermen');
  }

  handleClick2 = () => {
    this.setState({
      filter: 'seneka'
    })
    localStorage.setItem('test', 'seneka');
  }

  renderNavList = () => {
    const tag = localStorage.getItem('test');
    const path = this.props.count;
    const dataNavList = dataNav
    .filter(x => x.tags.indexOf(tag || this.state.filter) > -1)
    .map(item =>
        <li className="list__li" key={item.id}>
          <Link
            className={`list__link ${item.path === path ? 'list__link--active' : ''}`}
            to={item.path}>{item.text}</Link>
        </li>
      )
    return (
      <ul className="list">
        {dataNavList}
      </ul>
    )
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
        <nav>
          <h3 className="logo">Александр Мень</h3>
          {this.renderNavList()}
          <button onClick={this.handleClick1}>text 1</button>
          <br />
          <button onClick={this.handleClick2}>text 2</button>
        </nav>
      </CSSTransition>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  count: state.currentPath
})

export default connect(mapStateToProps)(Sidebar)