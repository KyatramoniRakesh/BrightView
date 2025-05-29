import React from "react";
import "./Banner.css";

const BannerSection = () => {
  return (
    <div className="banner-section" style={{ backgroundImage: `url('/images/Group 1000006270.png')`, }}>
      <div className="banner-content">
        <h1 className="banner-title">Eye Specialists</h1>
        <h2 className="banner-subtitle">You Can <span className="highlight1">Trust</span></h2>
        <button className="banner-main-btn fw-semibold">
           Book Appointment
        </button>
      </div>
      <div className="banner-side-buttons">
        <button className="side-btn book-btn-mobile-hide">
  <img src="images/Calander.png" alt="Calendar" height="18" id="book-app"/>
  Book Appointment
</button>

        <button className="side-btn whatsapp">
    <i className="fab fa-whatsapp"></i> Chat With Us
  </button>
      </div>
    </div>
  );
};

export default BannerSection;
