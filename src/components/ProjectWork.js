import "./ProjectcardStyle.css";

import React from 'react'
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectcardData";

const ProjectWork = () => {
  return (
    <div className="project-container">
    <h1 className="project-heading">PROJECTS</h1>
    <div className="project-container">
    {ProjectCardData.map((val,ind) =>  {
        return (
            <ProjectCard key = {ind} imgsrc = {val.imgsrc} title = {val.title} text = {val.text}/>
        )
    })}
    </div>
      
    </div>
  )
}

export default ProjectWork
