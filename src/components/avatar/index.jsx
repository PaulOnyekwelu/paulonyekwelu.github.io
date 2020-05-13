import React from 'react';

import Banner from '../../images/banner.svg';
import Paul from '../../images/paul.jpg';

import './avatar.style.scss';

const Avatar = ({customClass}) => {
    return (
        <figure className={`mobile-avatar ${customClass}`} >
            <img className="img-banner"  src={Banner} alt=""/>
            <img className="img-avatar" src={Paul} alt=""/>
        </figure>
    )
}

export default Avatar;