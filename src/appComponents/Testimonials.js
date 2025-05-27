import React, { useEffect, useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "I Was Nervous About Getting LASIK, But The Doctors At [Hospital Name] Made Me Feel Completely At Ease. The Procedure Was Quick And Painless, And Now I Can See Clearly Without Glasses For The First Time In 15 Years!",
    author: "Priya D., Caregiver",
    avatars: [
      "https://randomuser.me/api/portraits/women/47.jpg",
      "https://randomuser.me/api/portraits/men/33.jpg",
      "https://randomuser.me/api/portraits/women/45.jpg",
      "https://randomuser.me/api/portraits/men/31.jpg",
    ],
  },
  {
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    quote:
      "Thanks to their expert team, my vision is better than ever. I highly recommend their services to anyone seeking quality eye care!",
    author: "Raj K., Photographer",
    avatars: [
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/women/46.jpg",
      "https://randomuser.me/api/portraits/men/30.jpg",
      "https://randomuser.me/api/portraits/women/43.jpg",
    ],
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { image, quote, author, avatars } = testimonials[current];

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">Testimonials</h2>

      <div className="testimonial-content">
        <div className="testimonial-row">
          <img src={avatars[0]} alt="left1" className="side-avatar top-left" />
          <img src={avatars[1]} alt="left2" className="side-avatar bottom-left" />

          <div className="testimonial-image-wrapper">
            <img src={image} alt="Main" className="testimonial-main-image" />
          </div>

          <img src={avatars[2]} alt="right1" className="side-avatar top-right" />
          <img src={avatars[3]} alt="right2" className="side-avatar bottom-right" />
        </div>

        <p className="testimonial-text">“{quote}”</p>
        <p className="testimonial-author">— {author}</p>

        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>


      
      <div className="map-overlay">
        <div className="map-card">
          <div className="map-card-header">
            <h3>Bright View Eye Care Hospital</h3>
            <img src="images/directions.png" alt="Hospital Logo" className="map-card-logo" />
            
          </div>
          <p>
            H.O. 6-3-1092/A, A-Block, Shanti Sikhara Apartments,<br />
            Above CSB Bank,Rajbhavan Road,Somajiguda,<br />
            Hyderabad - 500082
          </p>

          <p className="rating">
            <span>4.8 ★★★★ </span><span className="review-count">10k Reviews</span>
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


      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <img src="/images/Logonew.jpg" alt="Logo" className="footer-logo" />
            <p>
              We Are Dedicated To Preserving And Enhancing Your Vision With
              Compassionate, Expert Care.
            </p>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
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
      H.O.6-3-1092/A, A-Block,<br />
      Shanti Sikhara<br />
      Apartments, Somajiguda.
    </div>
  </div>
</div>

        </div>
        <div className="footer-bottom">
          <p>Copyright @ Bright View Eye Care Hospital.Com</p>
        </div>
      </footer>
    </div>
  );
};
export default Testimonial;
