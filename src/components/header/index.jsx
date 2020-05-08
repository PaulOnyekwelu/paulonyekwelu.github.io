import React, { useState } from 'react';
import Nav from '../nav';
import Logo from '../logo';

import './header.style.scss';
import Avatar from '../avatar';
import HeaderDescription from '../header-description';

const Header = () => {
    let [menuToggle, setMenuToggle] = useState(false);

    const toggleHamburger = () => {
        setMenuToggle(!menuToggle)
        console.log(menuToggle)
    }
    return (
        <header className="header"> 
            <Nav customClass={ menuToggle ? 'showMenu' : 'hideMenu' } MenuToggle = {toggleHamburger}  />     
            <div className="header-left">
                <div className="header-left-top">
                    <div className="hamburger" onClick={toggleHamburger}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <Logo />
                </div>
                <HeaderDescription />
            </div>
            <div className="header-right">
                <Avatar />
            </div>        
        </header>
    )
}

export default Header;