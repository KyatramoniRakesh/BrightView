import React from "react";
import "./AppointmentModal.css"

const AppointmentModal = ({ show, handleClose }) => {
  if (!show) return null;

  return (
    <div className="appointment-modal-overlay">
      <div className="appointment-modal">
        <button className="close-btn" onClick={handleClose}>×</button>

        <h4 className="title">
          <span className="blue">Book</span> <span className="yellow">Appointment</span>
        </h4>
        <p className="subtitle">Enter Your Personal Details</p>

        <form className="appointment-form">
          <label>
            Full Name *
            <input type="text" placeholder="Name" />
          </label>

          <label>
            Enter Mail *
            <input type="email" placeholder="Mail" />
          </label>

        <label>
        Phone Number *
        <div className="phone-input-wrapper">
            <span className="flag">🇮🇳 +91</span>
            <input type="tel" className="phone-input" placeholder="Enter phone number" />
        </div>
        </label>


          <label>
            Specialities *
            <select>
              <option>Select</option>
              <option>Eye Surgery</option>
              <option>Glaucoma</option>
            </select>
          </label>

          <label>
            Appointment Date *
            <input type="date" />
          </label>

          <button type="submit" className="submit-btn">Book Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
