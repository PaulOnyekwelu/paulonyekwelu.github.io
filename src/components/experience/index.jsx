import React from 'react';
import './experience.style.scss';
import { AlcImg } from '../../images/experience';

const Experience = () => {
    return (
        <section className="experiences">
            <div className = "experiences-title">Experience</div>
            <div className="experiences-section">
                <div className="experience">
                    <div className="experience-header">
                        <span className="company-info">
                            <img src={AlcImg} alt="company Logo"/>
                            <h3>AlcWithGoogle</h3>
                        </span>
                        <h3 className="job-role">Frontend Developer Intern</h3>
                    </div>
                    <div className="experience-section">
                        <p className="experience-description">job entails - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sed.</p>
                        <div className="experience-accomplishment">
                            accomplishments - Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, est?
                        </div>
                        <div className="experience-date">March, 2019 - February, 2020</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;