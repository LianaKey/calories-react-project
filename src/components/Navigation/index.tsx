import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation:React.FunctionComponent = () =>  {
    return (
        <nav>
            <div className="nav-wrapper amber darken-3 p2">
            <a href="/" className="brand-logo">CALORIES</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Calculator</Link></li>
                <li><Link to="/more">Want to see some more?</Link></li>
                <li><Link to="/info">Information</Link></li>
            </ul>
            </div>
        </nav>
    )
}
