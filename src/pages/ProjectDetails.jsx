// ProjectDetails.jsx

// Import React Router components
import { Link, useParams } from "react-router-dom";

// Import reusable fetch hook
import useFetch from "../hooks/useFetch";

// Import page styles
import "../styles/ProjectDetails.css";


// GitHub API endpoint
const API_URL = "https://api.github.com/users/jlc996/repos";


// Projects hidden from portfolio
const excludedProjects = [
  "Software-Design"
];


// Project Details page component
function ProjectDetails() {

  // Get repository name from URL
  const { id } = useParams();


  // Fetch GitHub repositories
  const {
    data: projects,
    isLoading,
    error,
  } = useFetch(API_URL);


  // Safely filter projects
  const projectList = (projects || []).filter(
    (project) =>
      !excludedProjects.includes(project.name)
  );


  // Find selected repository
  const project = projectList.find(
    (repo) => repo.name === id
  );


  // Loading state
  if (isLoading) {

    return (

      <section className="project-details">

        <h2>
          Loading Project...
        </h2>

      </section>

    );

  }


  // Error state
  if (error) {

    return (

      <section className="project-details">

        <h2>
          Error Loading Project
        </h2>

        <p>
          {error}
        </p>

        <Link
          to="/projects"
          className="button secondary-button"
        >
          Back to Projects
        </Link>

      </section>

    );

  }


  // Project not found
  if (!project) {

    return (

      <section className="project-details">

        <h2>
          Project Not Found
        </h2>

        <p>
          The requested project could not be found.
        </p>

        <Link
          to="/projects"
          className="button secondary-button"
        >
          Back to Projects
        </Link>

      </section>

    );

  }


  // Render page
  return (

    <section className="project-details">

      {/* ==========================
          Project Header
      ========================== */}

      <header className="project-details-header">

        <h1>
          {project.name
            .replace(/[-_]/g, " ")
            .replace(/\b\w/g, (letter) => letter.toUpperCase())}
        </h1>

        <p className="project-description">

          {project.description ||
            "This repository does not currently include a project description."}

        </p>


        {/* ==========================
            Repository Topics
        ========================== */}

        {project.topics?.length > 0 && (

          <div className="project-topics">

            {project.topics.map((topic) => (

              <span
                key={topic}
                className="topic-badge"
              >

                {topic}

              </span>

            ))}

          </div>

        )}

      </header>



      {/* ==========================
          Project Information Card
      ========================== */}

      <div className="details-card">

        <p>
          <strong>
            Primary Language:
          </strong>{" "}
          {project.language || "Not specified"}
        </p>

        <p>
          <strong>
            Stars:
          </strong>{" "}
          {project.stargazers_count}
        </p>

        <p>
          <strong>
            Forks:
          </strong>{" "}
          {project.forks_count}
        </p>

        <p>
          <strong>
            Open Issues:
          </strong>{" "}
          {project.open_issues_count}
        </p>

        <p>
          <strong>
            Visibility:
          </strong>{" "}
          {project.visibility}
        </p>

        <p>
          <strong>
            Repository Size:
          </strong>{" "}
          {project.size} KB
        </p>

        <p>
          <strong>
            Default Branch:
          </strong>{" "}
          {project.default_branch}
        </p>

        <p>
          <strong>
            License:
          </strong>{" "}
          {project.license?.name || "None"}
        </p>

        <p>
          <strong>
            Created:
          </strong>{" "}
          {new Date(project.created_at).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          )}
        </p>

        <p>
          <strong>
            Last Updated:
          </strong>{" "}
          {new Date(project.updated_at).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          )}
        </p>

      </div>



      {/* ==========================
          Action Buttons
      ========================== */}

      <div className="details-buttons">

        {project.homepage && (

          <a
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="button primary-button"
          >

            Live Demo

          </a>

        )}

        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="button primary-button"
        >

          View on GitHub

        </a>

        <Link
          to="/projects"
          className="button secondary-button"
        >

          Back to Projects

        </Link>

      </div>

    </section>

  );

}


// Export component
export default ProjectDetails;