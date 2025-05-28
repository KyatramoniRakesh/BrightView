import React from 'react'
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
// import bimg from './images/b.png' ;


const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-hero d-flex align-items-center justify-content-center text-blue text-center" >
        <div>
          <p className="breadcrumb-text">Home / About Us</p>
          <h1 className="display-5 fw-bold">About Us</h1>
        </div>

      </div>
    </>
  )
}

export default About