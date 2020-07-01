import React from 'react';

const HeaderDescription = ()  => {
    return(
        <div className = "header-description">
            <div className="header-description-title">
                <h1>Software</h1>
                <h1>Developer.</h1>
            </div>
            <p className="header-description-text">I like crafting solid and scalable Products that make differences. <span>&#129351;</span></p>
            <div className='socials'>
                <span className='social'><a href="https://www.linkedin.com/in/paul-onyekwelu-bb3580124/" target='_blank' rel='noreferrer noopener'>LN</a></span>
                <span className='social'><a href="https://github.com/silanka007" target='_blank' rel='noopener noreferrer'>GH</a></span>
                <span className='social'><a href="https://twitter.com/Rx_Silanka" target='_blank' rel='noopener noreferrer'>TW</a></span>
                <span className='social'><a href="https://www.dropbox.com/s/mcdnp0pe895rkc4/PAULONYEKWELU.docx?dl=0"  target='_blank' rel='noopener noreferrer'>RESUME</a></span>
            </div>
        </div>
    )
}

export default HeaderDescription;