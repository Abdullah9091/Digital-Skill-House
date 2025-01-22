import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/brands/DSH.png";
import DarkMode from "./DarkMode";
import "./Navbar.css"; // Import the CSS file

export const MenuLinks = [
  {
    id: 1,
    name: "About",
    link: "/#about",
  },
  {
    id: 2,
    name: "Services",
    link: "/services",
  },
  {
    id: 3,
    name: "Projects",
    link: "/#projects",
  },
  {
    id: 4,
    name: "Courses",
    link: "/project",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo Section */}
          <a
  target="_blank"
  href="https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ?sub_confirmation=1"
  className="navbar-logo"
  rel="noreferrer"
>
  <img src={Logo} alt="Logo" className="logo" />
  <span className="logo-text">Digital Skill House</span>
</a>


          {/* Desktop Navigation */}
          <nav className="navbar-desktop">
            <ul className="navbar-links">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="navbar-item">
                  <a href={link} className="navbar-link">
                    {name}
                  </a>
                </li>
              ))}
              <button className="primary-btn">Contact Us</button>
              <DarkMode />
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <div className="navbar-mobile">
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1 onClick={toggleMenu} className="menu-icon" size={30} />
            ) : (
              <HiMenuAlt3 onClick={toggleMenu} className="menu-icon" size={30} />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
