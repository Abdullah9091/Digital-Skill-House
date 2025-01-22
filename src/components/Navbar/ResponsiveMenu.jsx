import { MenuLinks } from "./Navbar";
import "./ResponiveMenu.css"; // Import the CSS file

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`responsive-menu ${showMenu ? "menu-open" : "menu-closed"}`}
    >
      <div className="card">
        <div className="user-section">
          {/* You can add user details or a placeholder here */}
        </div>
        <nav className="menu-navigation">
          <ul className="menu-links">
            {MenuLinks.map((data) => (
              <li key={data.name}>
                <a href={data.link} className="menu-item">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Footer section can be added here */}
    </div>
  );
};

export default ResponsiveMenu;
