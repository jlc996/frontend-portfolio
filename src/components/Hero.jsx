// Hero.jsx

// React Router
import { Link } from "react-router-dom";

// Profile image
import profileImage from "../assets/profile/profile.png";

// Component styles
import "../styles/Hero.css";

// Hero component
function Hero() {
  return (
    <section className="hero">

      {/* Left Side */}
      <div className="hero-content">

        <p className="hero-greeting">
          Hello, I'm
        </p>

        <h1>Joshua Craven</h1>

        <h2>Frontend Developer</h2>

        <p>
          I build responsive, accessible, and modern web applications using
          HTML, CSS, JavaScript, React, Bootstrap, and REST APIs. I enjoy
          creating clean user interfaces and interactive user experiences while
          continually expanding my full stack development skills.
        </p>

        <div className="hero-buttons">

          <Link
            to="/projects"
            className="button primary-button"
          >
            View My Projects
          </Link>

          <Link
            to="/contact"
            className="button secondary-button"
          >
            Contact Me
          </Link>

        </div>

      </div>

      {/* Right Side */}
      <div className="hero-image">

        <img
          src={profileImage}
          alt="Joshua Craven"
        />

      </div>

    </section>
  );
}

export default Hero;