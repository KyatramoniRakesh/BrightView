import React from "react";
import { useState } from "react";
import "./Specialists.css";


const specialists = [
  { name: "Dr.Jholian", specialty: "Glaucoma", img: "images/female-doctor-hospital.png" },
  { name: "Dr.Laurance", specialty: "Clarivu Eye", img: "images/doctor-standing-with-folder-stethoscope.png" },
  { name: "Dr.Armika", specialty: "Cataract Surgery", img: "images/woman-with-stethoscope-holding-clipboard.png" },
  { name: "Dr.Catherine", specialty: "Cataract Surgery", img: "images/doctor-offering-medical-teleconsultation.png" },
  { name: "Dr.Jholian", specialty: "Glaucoma", img: "images/female-doctor-hospital.png" },
  { name: "Dr.Laurance", specialty: "Clarivu Eye", img: "images/doctor-standing-with-folder-stethoscope.png" },
  { name: "Dr.Armika", specialty: "Cataract Surgery", img: "images/woman-with-stethoscope-holding-clipboard.png" },
  { name: "Dr.Catherine", specialty: "Cataract Surgery", img: "images/doctor-offering-medical-teleconsultation.png" },
];

const news = [
  {
    title: "Prepare To Speak With Your Eye Specialist",
    date: "May 16,2025",
    text:
      "Lorem Ipsum Is A Dummy Or Placeholder Text Commonly Used In Graphic Design, Publishing, And Web Development.",
    img: "images/high-angle-woman-getting-her-eyes-checked.png",
  },
  {
    title: "Prepare To Speak With Your Eye Specialist",
    date: "May 17,2025",
    text:
      "Lorem Ipsum Is A Dummy Or Placeholder Text Commonly Used In Graphic Design, Publishing, And Web Development.",
    img: "images/optician-examining-womans-eyes-through-slit-lamp.png",
  },
  {
    title: "Prepare To Speak With Your Eye Specialist",
    date: "May 18,2025",
    text:
      "Lorem Ipsum Is A Dummy Or Placeholder Text Commonly Used In Graphic Design, Publishing, And Web Development.",
    img: "images/ophthalmology-indoors-doctor-checking-young-woman-s-visual-acuity-with-special-machine-spacious-cabinet-with-panoramic-window-with-blinds.png",
  },

];

const faqs = [
  {
    question: "What Services Do Eye Hospitals Provide?",
    answer:
      "Eye Hospitals Typically Offer Services Like Glaucoma Treatment, Retina Services, Pediatric Ophthalmology, And Emergency Eye Care.",
  },
  {
    question: "What Should I Expect During My First Visit?",
    answer:
      "During Your First Visit, You’ll Undergo A Comprehensive Eye Examination To Assess Your Vision And Eye Health.",
  },
  {
    question: "Are Eye Surgeries Painful?",
    answer:
      "Most Eye Surgeries Are Painless And Performed Under Local Anesthesia, Ensuring A Comfortable Experience.",
  },
  {
    question: "How Often Should I Have An Eye Exam?",
    answer:
      "Adults Should Have An Eye Exam Every 1-2 Years. Those With Conditions Like Diabetes May Need More Frequent Visits.",
  },
  {
    question: "Do Eye Hospitals Accept Insurance?",
    answer:
      "Yes, Most Eye Hospitals Accept Various Insurance Plans. It’s Best To Confirm With The Hospital Before Your Appointment.",
  },
];

const SpecialistsAndNews = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section className="specialists-section">
        <h2 className="section-title text-center mb-4">
          Meet Our <span className="highlight" id="services2">Specialists</span>
        </h2>

        <div id="specialistCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {Array.from({ length: Math.ceil(specialists.length / 4) }, (_, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="d-flex justify-content-center flex-wrap gap-3 px-2 specialists-wrapper">
                  {specialists.slice(index * 4, index * 4 + 4).map((doc, i) => (
                    <div className="specialist-card" key={i}>
                      <div className="img-container">
                        <img src={doc.img} alt={doc.name} className="specialist-img" />
                        <div className="eye-icon">
                          <img src="./images/Eye.png" alt="eye icon" />
                        </div>
                      </div>
                      <div className="specialist-info">
                        <h4>{doc.name}</h4>
                        <p>{doc.specialty}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#specialistCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-primary rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#specialistCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-primary rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>


      <section className="news-section">
        <h2 className="section-title">
          News <span className="highlight">& Updates</span>
        </h2>
        <div className="news-grid">
          {news.map((item, i) => (
            <div className="news-card" key={i}>
              <img src={item.img} alt={item.title} className="news-img" />
              <div className="news-info">
                <h4>{item.title}</h4>
                <span className="news-date">
                  <img src="images/Calendar2.png" alt="calendar" className="calendar-icon" />
                  {item.date}
                </span>

                <p>{item.text}</p>
                <a href="#" className="read-more">Readmore...</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-banner">
        <div className="faq-banner-content">
          <div className="faq-image">
            <img
              src="./images/woman-doctor-isolated-white-background 2.png"
              alt="Doctor pointing"
            />
          </div>

          <div className="faq-box">
            <h2>FAQs</h2>
            <ul>
              {faqs.map((faq, index) => (
                <li key={index}>
                  <div className="faq-question" onClick={() => toggleFAQ(index)}>
                    <span className="faq-number">{index + 1}</span>
                    <span className={`faq-title ${activeIndex === index ? "active" : ""}`}> {faq.question} </span>
                    <span className="faq-toggle">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </div>
                  {activeIndex === index && (
                    <div className="faq-answer">{faq.answer}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


    </>
  );
};

export default SpecialistsAndNews;
