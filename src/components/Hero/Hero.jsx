import React from "react";
import yellowCar from "../../assets/brands/Hero.png";
import "./Hero.css"; // Import the CSS file

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-grid">
          {/* Image section */}
          <div data-aos="zoom-in" className="hero-image-wrapper">
            <img
              src={yellowCar}
              alt="Yellow Car"
              className="hero-image"
            />
            <div
              data-aos="slide-right"
              className="hero-badge"
            >
              <p className="hero-badge-text">⭐Projects</p>
              <h1 className="hero-badge-title">
                600+ <span className="hero-badge-subtitle">Done</span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className="hero-text">
            <h1
              data-aos="fade-up"
              className="hero-title"
            >
              Seamless IT for your business,{" "}
              <span className="hero-highlight">boosting your growth.</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="hero-description">
            We provide the expertise and support to propel your business forward in the digital landscape.
            </p>
            <div className="hero-buttons">
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                className="hero-btn"
              >
                Learn More
              </button>
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                className="hero-btn"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
