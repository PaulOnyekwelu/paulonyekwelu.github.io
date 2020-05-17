import React from 'react';

import skillSets from '../store/skills';
import SectionHeader from './section-header';


const Skills = () => {
    return (
        <section className = "skills" id="skills">
            <SectionHeader title="SKILLS" />
            <div className = "skills-list">
                    {
                        Object.entries(skillSets).map( (value) => {
                            return (
                                    <div className="skills-list-item" key={value[0]}>
                                        <h1 className="skills-list-item-title">{value[0]}</h1>
                                        <div className="skills-items">
                                            { 

                                            value[1].map(skillSet => {
                                                return (
                                                    <figure className="skill-item" key={skillSet.id}>
                                                        <img className="item-img" src={skillSet.imgUrl} alt={skillSet.alt} />
                                                        <figcaption className="item-figcaption">{skillSet.caption}</figcaption>
                                                    </figure>
                                                )
                                            })

                                            }
                                        </div>
                                    </div>
                            )
                        })
                    }
            </div>
        </section>
    )
}

export default Skills;
