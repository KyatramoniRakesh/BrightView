import React from 'react';
import Navbar from '../Navbar';
import './About.css';
import Footer from '../Footer';
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="hero-banner" style={{ backgroundImage: "url('/images/b.png')" }}>
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <p className="breadcrumb-text">Home / About Us</p>
          <h1 className="display-5 fw-bold text-white">About Us</h1>
        </div>
      </div>

      <div className="container my-5 about-content">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 position-relative mb-4 mb-lg-0 px-3">
            {/* <img src="/images/d.png" alt="Doctor" className="img-fluid rounded main-image" />
            <div className="experience-tag">
              <span>20<br />Years Of Experience</span>
            </div>
            <img src="/images/aboutus-img2.png" alt="Consulting" className="img-fluid rounded side-image" /> */}
            <img src='/images/aboutus-img.png' alt='img' className="img-fluid rounded main-image"/>
          </div>

          <div className="col-lg-6 col-md-12 ml-3">
            <h3 className="text-primary">Who We Are</h3>
            <h2 className="fw-bold">
              We Make A Difference<br />In
              <span className="text-primary" id='life'> Their Life</span>
            </h2>
            <p className="text-muted">
              We’re a dedicated eye care center focused on helping people see clearly and comfortably.
              From eye tests to advanced treatments, we provide everything under one roof.
            </p>

            {/* <div className="service-section container my-5 px-0">
              <div className="d-flex flex-wrap justify-content-center align-items-start gap-4 service-wrapper">

                <div className="service-box text-start">
                  <img src="/images/polygon.png" alt="Services" className="service-icon" />
                  <h5 className="fw-bold mt-3">Services</h5>
                  <p className="mb-0">Contact Lens<br />Prescription<br />Ophthalmic Surgical<br />Consultation</p>
                </div>

                <div className="dashed-line horizontal"></div>

                <div className="service-box text-start">
                  <img src="/images/polygon.png" alt="Surgery" className="service-icon" />
                  <h5 className="fw-bold mt-3">Surgery</h5>
                  <p className="mb-0">Squint</p>
                </div>

                <div className="dashed-line horizontal"></div>

                <div className="service-box text-start">
                  <img src="/images/polygon.png" alt="Tests" className="service-icon" />
                  <h5 className="fw-bold mt-3">Tests</h5>
                  <p className="mb-0">Retina<br />Examination</p>
                </div>
              </div>
            </div> */}
            <div className="service-section container my-5 px-0">
  <div className="d-flex flex-wrap justify-content-center align-items-start gap-4 service-wrapper">

    <div className="service-box text-start">
      <img src="/images/polygon.png" alt="Services" className="service-icon" />
      <h5 className="fw-bold mt-3">Services</h5>
      <p className="mb-0 text-start">
        Contact Lens<br />
        Prescription<br />
        Ophthalmic Surgical<br />
        Consultation
      </p>
    </div>

    <div className="dashed-line horizontal"></div>

    <div className="service-box text-start">
      <img src="/images/polygon.png" alt="Surgery" className="service-icon" />
      <h5 className="fw-bold mt-3">Surgery</h5>
      <p className="mb-0 text-start">
        Squint
      </p>
    </div>

    <div className="dashed-line horizontal"></div>

    <div className="service-box text-start">
      <img src="/images/polygon.png" alt="Tests" className="service-icon" />
      <h5 className="fw-bold mt-3">Tests</h5>
      <p className="mb-0 text-start">
        Retina<br />
        Examination
      </p>
    </div>
  </div>
</div>


          </div>
        </div>
      </div>

      <div className="container my-5 about-content">
        <h4 className="section-heading">Mission & Vision</h4>
        <div className="mission-vision-box d-flex flex-column flex-lg-row p-4 rounded">
          <div className="text-section pe-lg-4 mb-4 mb-lg-0">
            <div className="info-block">
              <div className="d-flex align-items-start">
                <img src="/images/zoom.png" alt="Mission" className="feature-icon me-2" />
                <div>
                  <h5 className="fw-bold text-primary">Mission</h5>
                  <p className="text-muted mb-0">
                    Our mission is to make top-quality eye care accessible to everyone, with personalized treatment and advanced technology.
                  </p>
                </div>
              </div>
            </div>
            <div className="info-block">
              <div className="d-flex align-items-start">
                <img src="/images/hand.png" alt="Values" className="feature-icon me-2" />
                <div>
                  <h5 className="fw-bold text-primary">Values</h5>
                  <p className="text-muted mb-0">
                    We value empathy, honesty, and excellence — aiming to make every patient feel cared for and confident in their care.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <img src="/images/Eye-img.png" alt="Eye Graphic" className="img-fluid graphic-image" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;