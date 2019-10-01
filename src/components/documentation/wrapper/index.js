import React, { Component, Fragment } from 'react';
import Sidebar from '../sidebar'

class Wrapper extends Component {
  render() {
    return (
      <Fragment>
        <div className="sidenav">
            <Sidebar />
        </div>
        <div className="content">
            {this.props.children}
        </div>
    </Fragment>
    )
  }
}

export default Wrapper