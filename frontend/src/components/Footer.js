import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
    const [state] = React.useState({heading: 'Welcome', link1: 'Home', link2: 'About'})
    return (
        <div className="footer">
            <div className="footer__content">
                {/*<h1 className="footer__content-h1">{state.heading}</h1>*/}
                <img className="footer__content__img" src={'/images/Logotext2.png'} alt="logo"/>
                <div className="footer__content-links">
                    <Link to="/">{state.link1}</Link>
                    <span className="footer__content-span"> </span>
                    <Link to="/about">{state.link2}</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
