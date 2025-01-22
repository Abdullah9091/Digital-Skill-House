import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import "./service.css"; // Import the new CSS file

const skillsData = [
  {
    name: "App Development",
    icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "#",
    description:
      "User-friendly mobile apps delivering seamless experiences and functionality.",
    aosDelay: "0",
  },
  {
    name: "Web Designing",
    icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description:
      "We create vibrant, intuitive and minimalist web",
    aosDelay: "300",
  },
  {
    name: "Wordpress",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "We have a best team for your Start up Business.",
    aosDelay: "500",
  },
  {
    name: "SEO",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "We enhance customer experiences for success.",
    aosDelay: "700",
  },
  {
    name: "Custom Software",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "Efficient, tailored software solutions driving innovation and productivity.",
    aosDelay: "700",
  },
  {
    name: "Business Formation",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "Streamlined business formation services for swift and compliant startups.",
    aosDelay: "700",
  },
  {
    name: "CMS/CRM Develop",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "Customized CMS/CRM development for efficient management and customer engagement.",
    aosDelay: "700",
  },
];

const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="services-container dark">
        <div className="container">
          {/* Header */}
          <div className="services-header">
            <h1 data-aos="fade-up">Explore Our Services</h1>
            <p data-aos="fade-up" className="text-sm">
              We are self-service data analytics software that lets you create visually.
            </p>
          </div>

          {/* Services cards */}
          <div className="services-cards">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="services-card"
              >
                <div>{skill.icon}</div>
                <h1>{skill.name}</h1>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div data-aos="fade-up" data-aos-delay="900" className="text-center mt-8">
            <button className="primary-btn">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
