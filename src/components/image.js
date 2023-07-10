import "./imgStyle.css";
import React from 'react'
import IntroImg from "../assets/introImage.jpg"
import { Link } from "react-router-dom";

const Image = () => {
  return (
    <div className="image">
    <div className="mask">
    <img className="intro-img" src={IntroImg} alt="IntroImage" />
    </div>  
    <div className="content">
    <p>I'm a software Engineer</p>
    <h1>Web and Mobile App Developer</h1>
    <div>
    <Link to="/project" className="btn">Projects</Link>
    <Link to="/contact" className="btn btn-light">Contact</Link>
    </div>
    </div>
    </div>
  )
}

export default Image
