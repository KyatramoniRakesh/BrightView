import React from "react";
import "./Services.css";

// Use relative public path directly in src attribute
const services = [
  { title: "Cataract", img: "/images/Component 1.png" },
  { title: "Glaucoma", img: "/images/Component 2.png"  },
  { title: "Retina", img: "/images/Component 3.jpg"  },
  { title: "Oculoplasty", img: "/images/Component 4.png"  },
  { title: "Refractive", img: "/images/Component 5.png"  },
  { title: "Opticals", img: "/images/Component 6.png"  },
  { title: "Neuro Ophthalmology", img: "/images/Component 7.png"  },
  { title: "Upcoming", img: "/images/Component 8.png" },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2>
          Our Best <span className="highlight" id="">Services</span>
        </h2>
        <p>
          At <span className="highlight2">Bright View</span> Eye Hospital, we are dedicated to delivering
          world-class eye care with compassion, precision, and the latest technology.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} className="service-image" />
            {/* <div className="service-title">{service.title}</div> */}
          </div>
        ))}
      </div>  
    </section>
   
    
  );
};

export default Services;
