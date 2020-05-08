import React from 'react';

import Banner from '../../images/banner.svg';
import Paul from '../../images/paul.jpg';

import './avatar.style.scss';

const Avatar = () => {
    return (
        <figure className="mobile-avatar">
            <img className="img-banner" src={Banner} alt=""/>
            <img className="img-avatar" src={Paul} alt=""/>
        </figure>
    )
}

export default Avatar;