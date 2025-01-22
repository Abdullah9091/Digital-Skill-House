import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./BlogCard.css"; // Import the new CSS file

const BlogCard = ({ image, title, description }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image-wrapper">
        <img
          src={image}
          alt="No image"
          className="blog-card-image"
        />
      </div>
      <div className="blog-card-content">
        <h1 className="blog-card-title">{title}</h1>
        <p className="blog-card-description">{description}</p>
        <div className="blog-card-icon-wrapper">
          <FaArrowRight className="blog-card-icon" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
