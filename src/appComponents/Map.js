import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="map-overlay">
      <h2>
        Our <span className="highlight">Location</span>
      </h2>
      <div className="map-card">
        <div className="map-card-header">
          <h3>Bright View Eye Care Hospital</h3>
          <img
            src="images/directions.png"
            alt="Hospital Logo"
            className="map-card-logo"
          />
        </div>
        <p>
          H.O. 6-3-1092/A, A-Block, Shanti Sikhara Apartments,
          <br /> Above CSB Bank, Rajbhavan Road, Somajiguda,
          <br /> Hyderabad - 500082
        </p>
        <p className="rating">
          <span>4.8 ★★★★ </span>
          <span className="review-count">10k Reviews</span>
        </p>
       <a
            href="https://www.google.com/maps/search/H.O.+6-3-1092%2FA,+A-Block,+Shanti+Sikhara+Apartments,+Above+CSB+Bank,Rajbhavan+Road,Somajiguda,+Hyderabad+-+500082/@17.4255128,78.453513,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            
          >
          View Larger Map
        </a>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3806.713893395524!2d78.45351299978238!3d17.425512766936432!3m2!1i1024!2i768!4f13.1!2m1!1sH.O.%206-3-1092%2FA%2C%20A-Block%2C%20Shanti%20Sikhara%20Apartments%2C%20Above%20CSB%20Bank%2CRajbhavan%20Road%2CSomajiguda%2C%20Hyderabad%20-%20500082!5e0!3m2!1sen!2sin!4v1748334091900!5m2!1sen!2sin" 
        width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Bright View Eye Care Hospital Location"
          >

        </iframe>
        

    </div>
  );
};

export default Map;