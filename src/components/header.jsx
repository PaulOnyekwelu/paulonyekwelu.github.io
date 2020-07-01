import React, { useState } from 'react';
import Nav from './nav.jsx';
import Logo from './logo.jsx';
import Avatar from './avatar.jsx';
import HeaderDescription from './header-description.jsx';

const Header = () => {
    let [menuToggle, setMenuToggle] = useState(false);

    const toggleHamburger = () => {
        setMenuToggle(!menuToggle)
    }
    return (
        <header className="header"> 
            <Nav customClass={ menuToggle ? 'showMenu' : 'hideMenu' } MenuToggle = {toggleHamburger}  />     
            <div className={`header-left ${menuToggle ? 'blurHeader' : null}`}>
                <div className="header-left-top">
                    <div className="hamburger" onClick={toggleHamburger}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <Logo customClass="place-right" />
                </div>
                <HeaderDescription />
            </div>
            <div className={`header-right ${menuToggle ? 'blurHeader' : null}`}>
                <Avatar customClass = "header-img" />
            </div>        
        </header>
    )
}

export default Header;