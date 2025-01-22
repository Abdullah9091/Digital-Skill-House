import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/blog1.jpg";
import Img2 from "../../assets/blog/blog2.jpg";
import Img3 from "../../assets/blog/blog3.jpg";
import "./BlogsComp.css"; // Import the custom CSS file

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Discovery and Analysis",
    description: "Perform an analysis of the client's existing IT systems.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: Img2,
    title: "Tailored Solutions",
    description: "Develop IT solutions based on the analysis phase.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 3,
    image: Img3,
    title: "Deployment and Support",
    description: "Regularly communicate with our client to address any concerns.",
    author: "Someone",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <div className="blogs-section">
      <section  className="blogs-container">
        <h1 className="blogs-title">Best pathway to our clients.</h1>
        <div className="blogs-grid">
          {BlogsData.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
        <div className="blogs-button-container">
          <button className="blogs-view-all-btn">Learn More About</button>
        </div>
      </section>
    </div>
  );
};

export default BlogsComp;
