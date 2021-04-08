import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
    const [state] = React.useState({heading: 'Welcome', link1: 'Home', link2: 'About ', link3: 'LinkedIN'})
    return (
        <div className="header">
            <div className="header__content">
                <h1 className="header__content-h1">{state.heading}</h1>
                <div className="header__content-links">
                    <Link to="/">{state.link1}</Link>
                    <span className="header__content-span"> </span>
                    <Link to="/about">{state.link2}</Link>
                    <span className="header__content-span"> </span>
                    <a href='https://www.linkedin.com/in/muhammad-ali-al-chokhachi-kadhimi-a29318201/'>{state.link3}</a>
                </div>
            </div>
        </div>
    )
}

export default Header
