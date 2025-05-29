import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: `url('/images/mdi_eye-outline.png')`, }}>
      <div className="footer-content">
        <div className="footer-column">
          <img
            src="/images/Logonew.jpg"
            alt="Logo"
            className="footer-logo"
          />
          <p>
            We Are Dedicated To Preserving And Enhancing Your Vision With
            Compassionate, Expert Care.
          </p>
          <div className="footer-social">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.google.com" target="_blank" rel="noreferrer">
              <i className="fab fa-google"></i>
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Links</h4>
          <ul>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Media Center</li>
            <li>Doctors</li>
            <li>Testimonial</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Cataract</li>
            <li>Glaucoma</li>
            <li>Retina</li>
            <li>Oculoplasty</li>
            <li>Refractive Surgery</li>
            <li>Neuro Ophthalmology</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <span>720757049</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>Netrapurandhan@Gmail.Com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div className="address-text">
              H.O.6-3-1092/A, A-Block,
              <br /> Shanti Sikhara
              <br /> Apartments, Somajiguda.
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright @ Bright View Eye Care Hospital.Com</p>
      </div>
    </footer>
  );
};

export default Footer;
