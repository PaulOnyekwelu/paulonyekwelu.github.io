import React from 'react';
import "./skills.style.scss";
import skillSets from '../../store/skills';



const Skills = () => {
    return (
        <div className = "skills">
            <h1 className = "skills-title">SKILLS</h1>
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
                    {/* <h1 className="skills-list-item-title">HTML</h1>
                    <div className="skills-items">
                        <figure className="skill-item">
                            <img className="item-img" src={Html5Img} alt="Html5"/>
                            <figcaption className="item-figcaption">HTML5</figcaption>
                        </figure>
                        <figure className="skill-item">
                            <img className="item-img" src={JsxImg} alt="Jsx"/>
                            <figcaption className="item-figcaption">JSX</figcaption>
                        </figure>
                        <figure className="skill-item">
                            <img className="item-img" src={JinjaImg} alt="Jsx"/>
                            <figcaption className="item-figcaption">Jinja</figcaption>
                        </figure>
                        <figure className="skill-item">
                            <img className="item-img" src={EjsImg} alt="Jsx"/>
                            <figcaption className="item-figcaption">EJX</figcaption>
                        </figure>
                    </div> */}
                
                {/* <div className="skills-list-item"></div>
                <div className="skills-list-item"></div>
                <div className="skills-list-item"></div>
                <div className="skills-list-itema"></div> */}
            </div>
        </div>
    )
}

export default Skills;
