import React from 'react';

import Paul from '../images/paul.jpg';
import PaulNoBg from '../images/paul_nobg.png'

const Avatar = ({customClass}) => {
    return (
        <figure className={`mobile-avatar ${customClass}`} >
            {/* <img className="img-avatar" src={Paul} alt=""/> */}
            <img className="img-avatar" src={PaulNoBg} alt=""/>
        </figure>
    )
}

export default Avatar;