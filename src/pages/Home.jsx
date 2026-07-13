// Home.jsx

// Import React Router navigation
import { Link } from "react-router-dom";

// Import page styles
import "../styles/Home.css";

import profilePic from "../assets/profile.png";

// Home page component
function Home() {
  return (
    <section className="home">

      {/* Hero Section */}
      <div className="hero">

        {/* Developer Introduction */}
        <div className="hero-content">

          <h1>
            Hi, I'm Joshua Craven
          </h1>

          <h2>
            Frontend Developer
          </h2>

          <p>
            I build responsive, data-driven web applications using
            modern frontend technologies including React, JavaScript,
            HTML, CSS, and REST APIs.
          </p>


          {/* Call To Action Buttons */}
          <div className="hero-buttons">

            <Link
              to="/projects"
              className="button primary-button"
            >
              View Projects
            </Link>


            <Link
              to="/contact"
              className="button secondary-button"
            >
              Contact Me
            </Link>

          </div>

        </div>


        {/* Profile Image */}
        <div className="hero-image">

          <img
            src={profilePic}
            alt="Joshua Craven - Frontend Developer"
          />

        </div>

      </div>


      {/* Technology Stack Section */}
      <section className="tech-stack">

        <h2>
          Core Technologies
        </h2>


        <div className="tech-grid">

          <div className="tech-card">
            React
          </div>

          <div className="tech-card">
            JavaScript
          </div>

          <div className="tech-card">
            HTML
          </div>

          <div className="tech-card">
            CSS
          </div>

          <div className="tech-card">
            Bootstrap
          </div>

          <div className="tech-card">
            Git & GitHub
          </div>

        </div>

      </section>


      {/* Developer Metrics */}
      <section className="metrics">

        <div className="metric-card">
          <h3>
            10+
          </h3>

          <p>
            Projects Built
          </p>
        </div>


        <div className="metric-card">
          <h3>
            React
          </h3>

          <p>
            Frontend Framework
          </p>
        </div>


        <div className="metric-card">
          <h3>
            Full Stack
          </h3>

          <p>
            Development Focus
          </p>
        </div>

      </section>

    </section>
  );
}


// Export component
export default Home;