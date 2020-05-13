import React from 'react';
import './experience.style.scss';
import Experiences from '../../store/experience';

const Experience = () => {
    return (
        <section className="experiences" id="experience">
            <div className = "experiences-title">EXPERIENCE</div>
            <div className="experiences-section">

                {
                    Experiences.map(experience => {
                        return (
                            <div className="experience" key={experience.id}>
                                <div className="experience-header">
                                    <span className="company-info">
                                        <img src={experience.logoUrl} alt="company Logo"/>
                                        <h3>{experience.companyName}</h3>
                                    </span>
                                    <h3 className="job-role">{experience.jobRole}</h3>
                                </div>
                                <div className="experience-section">
                                    <p className="experience-description">{experience.companyProduct}</p>
                                    <div className="experience-accomplishment">
                                        {/* <h3 className="accomplishment-title">accomplishments</h3> */}
                                        <ul>
                                            {
                                                experience.accomplishments.map((accomplishment, index) => {
                                                    return(
                                                        <li key={index}>{accomplishment}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="experience-date">{experience.date}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Experience;