import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Image2 from '../components/image2';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Image2 heading="ABOUT" text="I'm a freelancer in web and mobile app development"/>
      <Footer/>
    </div>
  )
}

export default About
