// Experience.jsx

// Import the page stylesheet
import "../styles/Experience.css";

// Experience page component
function Experience() {
  return (
    <section className="experience">

      {/* ==========================
          Page Header
      ========================== */}

      <header className="experience-header">

        <h1>Experience & Skills</h1>

        <p>
          Throughout my journey at Mississippi Coding Academies, I have
          developed a strong foundation in modern frontend development by
          building responsive websites, interactive JavaScript applications,
          and React Single Page Applications using industry-standard tools
          and practices.
        </p>

      </header>



      {/* ==========================
          Technical Skills
      ========================== */}

      <section className="skills-section">

        <h2>Technical Skills</h2>

        <div className="skills-grid">

          {/* Frontend Skills */}
          <div className="skill-card">

            <h3>Frontend</h3>

            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>React Router</li>
              <li>Bootstrap 5</li>
              <li>Responsive Web Design</li>
            </ul>

          </div>

          {/* Backend Skills */}
          <div className="skill-card">

            <h3>Backend</h3>

            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST APIs</li>
              <li>JSON</li>
            </ul>

          </div>

          {/* Development Tools */}
          <div className="skill-card">

            <h3>Tools & Technologies</h3>

            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Visual Studio Code</li>
              <li>Vite</li>
              <li>Chrome DevTools</li>
              <li>npm</li>
            </ul>

          </div>

        </div>

      </section>



      {/* ==========================
          Development Timeline
      ========================== */}

      <section className="timeline">

        <h2>Development Journey</h2>

        {/* First Capstone */}
        <div className="timeline-item">

          <h3>2026 – Full Stack Development Foundations</h3>

          <p>
            Began the Full Stack Development program at Mississippi Coding
            Academies, learning HTML5, CSS3, responsive web design, Git,
            GitHub, and JavaScript fundamentals. Completed my first capstone
            project, <strong>Collab Computers</strong>, a responsive
            multi-page business website showcasing semantic HTML, modern CSS,
            Bootstrap, accessibility, and professional user interface design.
          </p>

        </div>

        {/* JavaScript */}
        <div className="timeline-item">

          <h3>2026 – JavaScript Application Development</h3>

          <p>
            Expanded my frontend development skills by transforming
            <strong> Collab Computers </strong>
            into a dynamic JavaScript application using reusable data
            structures, DOM manipulation, Local Storage persistence,
            interactive modals, reusable rendering functions, and shopping
            cart functionality.
          </p>

        </div>

        {/* React */}
        <div className="timeline-item">

          <h3>2026 – Modern React Development</h3>

          <p>
            Learned React fundamentals including reusable component
            architecture, hooks, state management, React Router, responsive
            layouts, and API integration. Built several React projects,
            including the interactive <strong>Mole Hole</strong> game, while
            gaining experience with component-based application development.
          </p>

        </div>

        {/* Portfolio */}
        <div className="timeline-item">

          <h3>2026 – Frontend Engineering Capstone</h3>

          <p>
            Designed and developed this professional portfolio as a React
            Single Page Application using Vite. Implemented client-side
            routing with React Router, a reusable custom
            <code> useFetch()</code> hook, live GitHub API integration,
            controlled form validation, reusable components, responsive CSS
            Grid and Flexbox layouts, and a global light/dark theme system to
            demonstrate modern frontend engineering practices.
          </p>

        </div>

      </section>



      {/* ==========================
          Professional Highlights
      ========================== */}

      <section className="highlights">

        <h2>Professional Highlights</h2>

        <div className="highlights-grid">

          <div className="highlight-card">

            <h3>Responsive Development</h3>

            <p>
              Designed mobile-first websites and applications using modern
              CSS Grid, Flexbox, and responsive design techniques that adapt
              seamlessly across desktop, tablet, and mobile devices.
            </p>

          </div>

          <div className="highlight-card">

            <h3>React Engineering</h3>

            <p>
              Developed reusable React components, custom hooks,
              client-side routing, and state-driven interfaces following
              modern frontend engineering best practices.
            </p>

          </div>

          <div className="highlight-card">

            <h3>API Integration</h3>

            <p>
              Connected applications to live REST APIs using asynchronous
              JavaScript, React Hooks, and reusable data-fetching patterns
              while handling loading and error states gracefully.
            </p>

          </div>

        </div>

      </section>

    </section>
  );
}

// Export the Experience component
export default Experience;