import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import AppointmentModal from "./AppointmentModal";
// import AllServices from "./AllServices/AllServices";
import { Link } from 'react-router-dom';
import Home from "../Home";
import Contactus from "./ContactUs/Contactus";


const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      {/*  upper/top navbar */}
<div className="top-info-bar py px-1 d-none d-lg-flex justify-content-end align-items-center text-muted small">
  <div className="d-flex align-items-center gap-4">
    <div className="d-flex align-items-center gap-2">
      <img src="Images/location-icon.png" alt="Location" height="16" />
      <span>H.O. 6-3-1092/A, A-Block , Shanti Sikhara Apartments</span>
    </div>
    <div className="d-flex align-items-center gap-2">
      <img src="Images/PhonePlus.png" alt="Phone" height="16" />
      <span>7207573049</span>
    </div>
    <div className="dropdown">
      <a
        className="dropdown-toggle text-muted d-flex align-items-center"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
      >
        <img
          src="Images/Globe2.png"
          alt="Language"
          width="18"
          height="18"
        />
      </a>
      <ul className="dropdown-menu dropdown-menu-end">
        <li><a className="dropdown-item" href="#">English</a></li>
        <li><a className="dropdown-item" href="#">हिंदी</a></li>
      </ul>
    </div>
  </div>
</div>


      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-1">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="./images/Logonew.jpg"
              alt="Logo"
              height="30"
              className="me-2"
            />
            <div className="logo-text">
              <h5 className="mb-0 text-primary">BRIGHT VIEW</h5>
              <small className="text-warning">EYE HOSPITAL</small>
            </div>
          </a>

          {/* Toggler for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-lg-center gap-lg-2">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#services">Our Best Service</a></li>
                  {/* <li><Link className="dropdown-item" to={AllServices}>Our Best Service</Link></li> */}
                  <li><a className="dropdown-item" href="#services2">Specialists</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">Doctors</a></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
              {/* <li className="nav-item"><Link className="nav-link" to={Home}></Link></li> */}
              <li className="nav-item"><Link className="nav-link" to='/contactus'>Contact Us</Link></li>

              <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                <a
                  href="#"
                  className="btn btn-primary fw-semibold text-white px-4 d-flex align-items-center gap-2"
                  onClick={handleOpen}
                >
                  {/* <img src="images/Calander.png" alt="Calendar" height="18" /> */}
                  Book Appointment
                  {/* <span className="arrow-icon">→</span> */}
                </a>
                <AppointmentModal show={showModal} handleClose={handleClose} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
