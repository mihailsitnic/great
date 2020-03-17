import React from 'react'
import { connect } from 'react-redux'
import { toggleMenu } from '../../../redux/AC'
import './styles.css'

function DropMenu(props) {
    const handleClick = () => {
        const action = toggleMenu()
        props.dispatch(action)
    }

    const { toggle } = props
    return (
        <div className="drop-menu">
            <div
                onClick={handleClick}
                className={`menu-btn ${toggle ? 'clicked' : ''}`}
            >
                <span className="menu-line">&nbsp;</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    toggle: state.toggleMenu
})

export default connect(mapStateToProps)(DropMenu)