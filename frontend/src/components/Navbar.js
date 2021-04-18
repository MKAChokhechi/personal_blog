import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
    const [state, setState] = React.useState(false);
    const [navOpen,setNavOpen] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])
    const handleScroll = () => {
        if (window.scrollY > 120) {
            setState(true);
        } else {
            setState(false);
        }
    }
    return (
        <div className={`navbarr ${state ? 'whiteBg' : 'transparent'} `}>
                <div className="container">
                    <div className="navbarr__content">
                        <div className="navbarr__left"><img src={state ? '/images/Logo1.png' : '/images/Logo2.png'}
                                                            alt="logo"/></div>

                        <figure onClick={()=> setNavOpen(!navOpen)} >
                            <i className={navOpen ?  'fa fa-bars':'fa fa-times'}> </i>
                        </figure>

                        {!navOpen?(
                            <ul className="navbarr__right">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/showcase">Showcases</Link>
                                </li>

                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/articles">Blog</Link>
                                </li>
                                <li>
                                    <a style={{color: '#ee4848'}}
                                       href='https://www.linkedin.com/in/muhammad-ali-al-chokhachi-kadhimi-a29318201/'>LinkedIn</a>
                                </li>
                            </ul>
                        )
                            :
                            ('')

                        }

                    </div>
                </div>
        </div>
    )
}

export default Navbar
