import React, {useState, useEffect } from 'react';
import Data from '../../store/projects';

import './projects.style.scss';


const Projects = () => {
	const [ projectSets, setProjectSets ] = useState(Data);

    const toggleProjectRear = (id) => {
        setProjectSets(prevProjectSets => {
            for(let projectSet of prevProjectSets){
                if(projectSet.id === id){
                    console.log(projectSet.showRear)
                    return [...prevProjectSets, {...projectSet, showRear: !projectSet.showRear }];
                }
            }
        })
	}
	
    return (
        <section className="projects">
            <h2 className="projects-header">PROJECTS</h2>
            <div className="projects-section">
                {
                    projectSets.map( ProjectSet => {
                        
                        return (
                            <div className="project" key={ProjectSet.id}>
                                <div className={`project-front ${ ProjectSet.showRear ? 'hide-front' : 'show-front'} `} id={ProjectSet.id} onClick={()=>toggleProjectRear(ProjectSet.id)} >
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
                                    <div>
                                        <span className="close-menu" onClick={()=>toggleProjectRear(ProjectSet.id)} >&#10005;</span>
                                    </div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nesciunt dolore fuga 
                                    incidunt odit sunt accusantium laborum aliquid quia expedita! Omnis culpa natus 
                                    accusamus, impedit obcaecati porro hic ipsam vel!
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