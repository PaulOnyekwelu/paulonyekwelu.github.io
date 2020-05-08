import React from 'react';
import './nav.style.scss';

const Nav = ({ MenuToggle, customClass}) => {
    return (
            <nav className={`nav ${customClass}`} >
                <div className="logo-section">
                   <span className="close-menu" onClick={MenuToggle} >
                   &#10005;
                   </span>
                </div>
                <div>
                    <ul className="nav-section">
                        <li className="nav-item"><a href="/">About Me</a></li>
                        <li className="nav-item"><a href="/skill">Skills</a></li>
                        <li className="nav-item"><a href="/projects">Projects</a></li>
                        <li className="nav-item"><a href="/experience">Experience</a></li>
                        {/* <li className="nav-item"><a href="/education">Education</a></li> */}
                        <li className="nav-item"><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
    )
}

export default Nav;