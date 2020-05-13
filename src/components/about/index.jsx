import React from 'react';

import './about.style.scss';

const AboutMe = () => {
    return (
        <section className = "about-me" id="about">
            <h2 className="about-me-title">ABOUT ME</h2>
            <div className = "about-me-text">
                <p>
                    My name is Paul Onyekwelu and I am a software Developer always in beta mode. 
                    I am an Autodidact when it comes to software development. I have  
                    great passion for creating and innovating using available technologies.
                    Although my Career path has taken many twists and turns — from 
                    hospital Pharmacy to community practice and now software Development — I've 
                    never stopped engaging my passion when it comes to problem solving.
                </p>
                <p>
                    As a software developer, I enjoy using my obsessive attention to detail, my unequivocal 
                    love for making things, and my mission-driven work ethic to literally change the world. 
                    That's why I’m excited to make a big impact at a high growth company.
                </p>
            </div>
        </section>
    )
}

export default AboutMe;
