import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Contactus.css';

const Contactus = () => {
  return (
    <>
      <Navbar />
      <div className='Conatact-us'>
        <div className="hero-banner" style={{ backgroundImage: "url('/images/contact-us.png')" }}>
          <div className="hero-overlay"></div>
          <div className="hero-text">
            <p className="breadcrumb-text">Home / Contact Us</p>
            <h1 className="display-5 fw-bold text-white">Contact Us</h1>
          </div>
        </div>
      </div>

      <div className='img-msg container my-5 p-3 d-flex flex-wrap justify-content-center'>
        {/* Left Image Section */}
        <div className='contact-img col-md-5 mb-4'>
          <img src="/images/curly-handsome-cute-guy.png" alt="Doctor" className="img-fluid rounded shadow" />
        </div>

        {/* Right Message Form */}
        <div className='msg-form col-md-6'>
          <h4 className="mb-4 fw-bold">Send us a message</h4>
          <form>
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="Enter your name" required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Enter Email <span className="text-danger">*</span></label>
              <input type="email" className="form-control" placeholder="mail@gmail.com" required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Enter Phone <span className="text-danger">*</span></label>
              <input type="tel" className="form-control" placeholder="+91 1234567890" required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Write A Message</label>
              <textarea className="form-control" rows="4" placeholder="Your message..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100 rounded-pill fw-semibold">Send Message</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contactus;
