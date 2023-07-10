import "./footerStyle.css";

import React from 'react'
import { FaGithub, FaHome, FaLinkedinIn, FaMailBulk, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
    <div className="left">
    <div className="location"> 
    <FaHome size={20} style={{color: "#fff" , marginRight: "2rem"}}/>
    <div>
    <p>38,Railway feeder road, Kallidai kurichi.</p>
    <p>Tirunelveli, Tamil Nadu</p>
    </div> 
    </div>
    <div className="phone">
    <h4>
    <FaPhone size={20} style={{color: "#fff" , marginRight: "2rem"}}/>
    +91 9677437827
    </h4>
  
    </div>
    <div className="email">
    <h4>
    <FaMailBulk size={20} style={{color: "#fff" , marginRight: "2rem"}}/>
    shunmugavelsv05@gmail.com
    </h4>
  
    </div>
    </div>
    <div className="right">
    <h4>About Me</h4>
    <p>
    An enterprising individual who is educated in the field of Web and
Mobile App development. I'm looking to use my comprehensive
knowledge to the best of my abilities and to learn, adapt and grow with
the organization.
    </p>
    <div className="social">
    <Link to = "https://github.com/shunmugavel10">
    <FaGithub size={20} style={{color: "#fff" , marginRight: "2rem"}}/>
    </Link>
    <Link>
    <FaLinkedinIn size={20} style={{color: "#fff" , marginRight: "2rem"}}/>
    </Link>
    
    </div>
    </div>
    </div>      
    </div>
  )
}

export default Footer
