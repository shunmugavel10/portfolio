import "./ProjectcardStyle.css";

import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className="project-container">
    <div className="project-container">
    <div className="project-card">
    <img src={props.imgsrc} alt="image"/>
    <h2 className="project-title">{props.title}</h2>
    <div className="project-details">
    <p>{props.text}</p>
    </div>
    </div>
    </div>
      
    </div>
  )
}

export default ProjectCard
