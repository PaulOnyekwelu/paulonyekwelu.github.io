import React, { useState } from 'react';
import Nav from '../nav';
import Logo from '../logo';

import './header.style.scss';
import Avatar from '../avatar';

const Header = () => {
    let [menuToggle, setMenuToggle] = useState(false);

    const toggleHamburger = () => {
        setMenuToggle(!menuToggle)
    }
    return (
        <header className="header"> 
            <div className="header-left">
                <div className="hamburger" onClick={toggleHamburger}>
                <div></div>
                <div></div>
                <div></div>
                </div>
                {
                    menuToggle ? <Nav customClass={'mobile'} MenuToggle = {toggleHamburger}/> : null
                }
                <Logo />
            </div>
            <div className="header-right">
                <Avatar />
            </div>
            
        </header>
    )
}

export default Header;