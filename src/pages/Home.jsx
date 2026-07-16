// Home.jsx

// Import reusable components
import Hero from "../components/Hero";

// Import page styles
import "../styles/Home.css";

// Home page component
function Home() {
  return (
    <section className="home">

      {/* Hero Section */}
      <Hero />

      {/* Technology Stack */}
      <section className="tech-stack">

        <h2>Core Technologies</h2>

        <div className="tech-grid">

          <div className="tech-card">
            React
          </div>

          <div className="tech-card">
            JavaScript
          </div>

          <div className="tech-card">
            HTML5
          </div>

          <div className="tech-card">
            CSS3
          </div>

          <div className="tech-card">
            Bootstrap 5
          </div>

          <div className="tech-card">
            Git & GitHub
          </div>

        </div>

      </section>

      {/* Developer Metrics */}
      <section className="metrics">

        <div className="metric-card">

          <h3>10+</h3>

          <p>Projects Built</p>

        </div>

        <div className="metric-card">

          <h3>React</h3>

          <p>Frontend Framework</p>

        </div>

        <div className="metric-card">

          <h3>REST APIs</h3>

          <p>API Integration</p>

        </div>

      </section>

    </section>
  );
}

// Export component
export default Home;