import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleMenu } from 'redux/AC'
import './styles.css'

class DropMenu extends Component {
    handleClick = () => {
        const action = toggleMenu()
        this.props.dispatch(action)
    }

    render() {
        const { toggle } = this.props
        return (
            <div className="drop-menu">
                <div
                    onClick={this.handleClick}
                    className={`menu-btn ${toggle ? 'clicked' : ''}`}
                >
                    <span className="menu-line">&nbsp;</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    toggle: state.toggleMenu
})

export default connect(mapStateToProps)(DropMenu)