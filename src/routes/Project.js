import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Image2 from '../components/image2';
import ProjectWork from '../components/ProjectWork';


const Project = () => {
  return (
    <div>
      <Navbar/>
      <Image2 heading = "PROJECTS" text="Some of my most recent projects"/>
      <ProjectWork/>
      <Footer/>
    </div>
  )
}

export default Project
