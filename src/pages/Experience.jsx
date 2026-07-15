// Experience.jsx

// Import the page stylesheet
import "../styles/Experience.css";

// Import the badges
import htmlBadge from "../assets/badges/html-badge.png";
import cssBadge from "../assets/badges/css-badge.png";
import javascriptBadge from "../assets/badges/javascript-badge.png";

// Import the certificates
import htmlCssCert from "../assets/certificates/html-css-cert.png"
import javascriptCert from "../assets/certificates/javascript-cert.png"

// ==========================
// Certification Badge Data
// ==========================

const certifications = [
  {
    id: 1,
    title: "HTML5 Certification",
    image: htmlBadge,
    description:
      "Demonstrated proficiency in semantic HTML, accessibility, and modern webpage structure."
  },

  {
    id: 2,
    title: "CSS3 Certification",
    image: cssBadge,
    description:
      "Built responsive layouts using Flexbox, CSS Grid, animations, and modern styling techniques."
  },

  {
    id: 3,
    title: "JavaScript Certification",
    image: javascriptBadge,
    description:
      "Applied ES6+, DOM manipulation, events, asynchronous JavaScript, and dynamic application development."
  },

];

// ==========================
// Completion Certificates
// ==========================

const completionCertificates = [
  {
    id: 1,
    title: "HTML & CSS Completion Certificate",
    issuer: "Mississippi Coding Academies",
    image: htmlCssCert,
    description:
      "Successfully completed the HTML & CSS module covering semantic HTML, responsive design, Flexbox, CSS Grid, accessibility, and modern web layouts."
  },

  {
    id: 2,
    title: "JavaScript Completion Certificate",
    issuer: "Mississippi Coding Academies",
    image: javascriptCert,
    description:
      "Successfully completed the JavaScript module covering ES6+, DOM manipulation, events, asynchronous programming, APIs, and dynamic web applications."
  }
];

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
          Certifications
        ========================== */}

      <section className="certifications">

        <h2>Certifications & Badges</h2>

        <p>
          Professional certifications earned while completing
          the Full Stack Development curriculum at
          Mississippi Coding Academies.
        </p>

        <div className="certification-grid">

          {certifications.map((certificate) => (

            <div
              key={certificate.id}
              className="certificate-card"
            >

              <img
                src={certificate.image}
                alt={certificate.title}
              />

              <h3>{certificate.title}</h3>

              <p>{certificate.description}</p>

            </div>

          ))}

        </div>

      </section>


      {/* ==========================
          Completion Certificates
        ========================== */}

      <section className="completion-certificates">

        <h2>Completion Certificates</h2>

        <p>
          Official module completion certificates earned while completing the
          Full Stack Development program at Mississippi Coding Academies.
        </p>

        <div className="certificate-grid">

          {completionCertificates.map((certificate) => (

            <div
              key={certificate.id}
              className="certificate-card"
            >

              <img
                src={certificate.image}
                alt={certificate.title}
              />

              <div className="certificate-content">

                <h3>{certificate.title}</h3>

                <h4>{certificate.issuer}</h4>

                <p>{certificate.description}</p>

              </div>

            </div>

          ))}

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
            <code>useFetch()</code> hook, live GitHub API integration,
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