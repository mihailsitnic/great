import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"
import { withRouter } from "react-router-dom"
import Sidebar from '../sidebar'

class Wrapper extends Component {
  render() {
    const { data, toggle } = this.props
    const locationPath = this.props.location.pathname.split('/')[2]
    const tag = this.props.location.pathname.split('/')[1]
    const currentData = data[tag]

    const ableTag = ['a', 'b', 'c', 'd']
    if (ableTag.indexOf(tag) === -1) {
      return <Redirect to="/404" />
    }

    return (
      <Fragment>
        <aside className={`sidenav ${toggle ? 'sidenav--active' : ''}`}>
            <Sidebar
              locationPath={locationPath}
              tag={tag}
              currentData={currentData}
            />
        </aside>
        <main className="content">
            {this.props.children}
        </main>
    </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  data: state.selectorData,
  toggle: state.toggleMenu
})

export default connect(mapStateToProps)(withRouter(Wrapper))