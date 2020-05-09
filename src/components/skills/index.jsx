import React from 'react';
import "./skills.style.scss";
import { Html5Img, JsxImg, JinjaImg, EjsImg } from '../../images/skill-logo';


const Skills = () => {
    return (
        <div className = "skills">
            <h1 className = "skills-title">SKILLS</h1>
            <div className = "skills-list">
                <div className="skills-list-item">
                    <h1 className="skills-list-item-title">HTML</h1>
                    <div className="skills-items">
                        <figure className="skill-item">
                            <img className="item-img" src={Html5Img} alt="Html5"/>
                            <caption className="item-caption">HTML5</caption>
                        </figure>
                        <figure className="skill-item">
                            <img className="item-img" src={JsxImg} alt="Jsx"/>
                            <caption className="item-caption">JSX</caption>
                        </figure>
                        <figure className="skill-item">
                            <img className="item-img" src={JinjaImg} alt="Jsx"/>
                            <caption className="item-caption">Jinja</caption>
                        </figure>
                        <figure className="skill-item">
                            <img className="item-img" src={EjsImg} alt="Jsx"/>
                            <caption className="item-caption">EJX</caption>
                        </figure>
                    </div>
                </div>
                {/* <div className="skills-list-item"></div>
                <div className="skills-list-item"></div>
                <div className="skills-list-item"></div>
                <div className="skills-list-itema"></div> */}
            </div>
        </div>
    )
}

export default Skills;
