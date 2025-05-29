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
    }, 3000);
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
    </div>
  );
};
export default Testimonial;
