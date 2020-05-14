import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import data from './data'
import './styles.css'

function BurgerMenu(props) {
    const { path } = props
    const pathname = props.location.pathname
    const handleChangePath = () => {
        if (pathname.split('/').length === 4) {
          const redirect = pathname.split('/').slice(0, -1).join('/');
          props.history.push(redirect)
        }
    }
    
    const list = data.filter(x => x.tags.indexOf(path) > -1).map(item =>
        <li className="bm-item__li" key={item.id}>
            <Link onClick={handleChangePath} className="bm-item__link" to={item.path}>{item.text}</Link>
        </li>
    )

    return (
        <div className="mobile-menu">
            <Menu>
                <ul>{list}</ul>
            </Menu>
        </div>

    )
}

export default withRouter(BurgerMenu)