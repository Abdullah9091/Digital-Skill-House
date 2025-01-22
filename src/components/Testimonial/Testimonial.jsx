import React from "react";
import Slider from "react-slick";
import "./testimonial.css"; // Import the new CSS file
import development from '../../assets/Card/development.jpg'
import woocomerce from '../../assets/Card/Woo commerce.jpg'
import CRM from '../../assets/Card/CRM.jpg'
import Webdesigning from '../../assets/Card/Web designing.jpg'
import itSupport from '../../assets/Card/It solution.jpg'

const testimonialData = [
  {
    id: 1,
    name: "Development",
    text: "Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.",
    img: development,
  },
  {
    id: 2,
    name: "Woo Commerce",
    text: "Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.",
    img: woocomerce,
  },
  {
    id: 3,
    name: "CRM Solutions",
    text: "Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.",
    img: CRM,
  },
  {
    id: 3,
    name: "Web Designing",
    text: "Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.",
    img: Webdesigning,
  },
  {
    id: 3,
    name: "IT Support",
    text: "Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.",
    img: itSupport,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <>
      <div className="testimonial-section">
        <div className="testimonial-container">
          <div data-aos="fade-up">
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="testimonial-card">
                    <img src={img} alt="" className="testimonial-image" />
                    <div>
                    <h1 className="testimonial-name">{name}</h1>

                      <p className="testimonial-text">“{text}”</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
