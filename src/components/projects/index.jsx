import React, { useState } from 'react';
import Data from '../../store/projects';
import extLink from '../../images/external-link.png';

import './projects.style.scss';
import { GithubImg } from '../../images/skill-logo';


const Projects = () => {
	const [ projectSets, setProjectSets ] = useState(Data);

    const toggleProjectRear = (id) => {
        const newProjectSets = projectSets.map(projectSet => {
            if(projectSet.id === id){
                projectSet.showRear = !projectSet.showRear;
            }
            return projectSet;
        })

        setProjectSets(newProjectSets);
    }
    
	
    return (
        <section className="projects">
            <h2 className="projects-header">PROJECTS</h2>
            <div className="projects-section">
                {
                    projectSets.map( ProjectSet => {
                        
                        return (
                            <div className="project" key={ProjectSet.id}>
                                <div className={`project-front ${ ProjectSet.showRear ? 'hide-front' : 'show-front'} `}  onClick={()=>toggleProjectRear(ProjectSet.id)} >
                                    <div className="project-img">
                                        <img src={ProjectSet.imageUrl} alt=""/>
                                    </div>
                                    <div className="project-content">
                                        <h3 className="heading">{ProjectSet.name}</h3>
                                        <p className="description">
                                                {ProjectSet.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="project-rear">
                                    <div className="project-rear-title">
                                        <span className="close-menu" onClick={()=>toggleProjectRear(ProjectSet.id)} >&#10005;</span>
                                        <span className="accomplishment-heading"><h4>ACCOMPLISHMENTS</h4></span>
                                    </div>
                                    <div className="project-accomplishments">
                                        {
                                            ProjectSet.accomplishments.map( accomplishment => {
                                                return (
                                                    <>
                                                    <span className="accomplishment-id"> -> </span>
                                                    <span className="accomplishment-detail">{accomplishment.detail}</span> <br />
                                                    </>
                                                )
                                            })
                                        }
                                    </div> 
                                    <div className="project-links">
                                        <span className="link">
                                            <a href={ProjectSet.url} target="_blank" rel="noopener noreferrer"><img src={extLink} alt=""/></a>
                                        </span>
                                        <span className="link">
                                            <a href={ProjectSet.githubUrl} target="_blank" rel="noopener noreferrer"><img src={GithubImg} alt=""/></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default React.memo(Projects);