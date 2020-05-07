import React from 'react';
import './nav.style.scss';
import Logo from '../logo';

const Nav = () => {
    return (
            <nav className="nav" >
                <div>
                   <Logo /> 
                </div>
                <div>
                    <ul className="nav-section">
                        <li className="nav-item"><a href="/">About Me</a></li>
                        <li className="nav-item"><a href="/skill">Skill</a></li>
                        <li className="nav-item"><a href="/projects">Projects</a></li>
                        <li className="nav-item"><a href="/experience">Experience</a></li>
                        <li className="nav-item"><a href="/education">Education</a></li>
                        <li className="nav-item"><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
    )
}

export default Nav;