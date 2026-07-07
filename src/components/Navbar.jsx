// Import NavLink for client-side routing
import { NavLink } from "react-router-dom";

// Import the theme toggle button
import ThemeToggle from "./ThemeToggle";

// Import the navbar stylesheet
import "../styles/Navbar.css";

// Navigation component
function Navbar() {
  return (
    // Main navigation bar
    <nav className="navbar">

      {/* Portfolio logo/title */}
      <div className="logo">
        <h2>Joshua Craven</h2>
      </div>

      {/* Navigation links */}
      <ul className="nav-links">

        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects">
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink to="/experience">
            Experience
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>

      </ul>

      {/* Dark/Light mode toggle */}
      <ThemeToggle />

    </nav>
  );
}

// Export the Navbar component
export default Navbar;