import React from 'react';
import './AboutUs.css';
import eyeCheckImage from '../Images/doctor-performing-vision-test-patient.png';

const AboutUs = () => {
  return (
    <section className="about-section">
      <h2 className="about-title"><strong>About Us</strong></h2>

      <div className="about-container">
        {/* Image Section */}
        <div className="about-image">
          <img
            src={eyeCheckImage}
            alt="Eye Checkup"
            className="img-fluid"
          />
        </div>

        {/* Text Section */}
        <div className="about-text">
          <h3>
            Bright View <span className="highlight">Eye Hospital</span>
          </h3>
          <p>
            At Bright View Eye Hospital, with a team of experienced ophthalmologists and advanced diagnostic and surgical equipment,
            we provide comprehensive eye care for patients of all ages. Your vision is our priority.
          </p>

          <div className="mission-values ">
            <div>
              <h4 className="mission-title"><img src='images/zoom.png' alt='icon'/> Mission</h4>
              <p>
                To become the premier destination for those seeking top-notch eye care, setting the standard for excellence in Hyderabad and beyond.
              </p>
            </div>
            <div>
              <h4 className="values-title"><img src='images/hand.png' alt='icon'/> Values</h4>
              <p>
                Compassion, precision, and dedication in delivering advanced and accessible vision care to everyone.
              </p>
            </div>
          </div>

          {/* Stats */}
          {/* <div className="about-stats ">
            <div className="stat-box">
              <strong>98.2%</strong>
              <p>Successful Operations</p>
            </div>
            <div className="stat-box">
              <strong>100+</strong>
              <p>Expert Doctors</p>
            </div>
            <div className="stat-box">
              <strong>15k+</strong>
              <p>Happy Patients</p>
            </div>
          </div> */}
          <div className="about-stats">
  <div className="stat-box">
    <strong>98.2%</strong>
    <p>Successful Operations</p>
  </div>
  <div className="stat-box">
    <strong>100+</strong>
    <p>Expert Doctors</p>
  </div>
  <div className="stat-box">
    <strong>15k+</strong>
    <p>Happy Patients</p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
