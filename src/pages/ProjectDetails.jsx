// ProjectDetails.jsx

// Import React Router components
import { Link, useParams } from "react-router-dom";

// Import the reusable fetch hook
import useFetch from "../hooks/useFetch";

// Import page styles
import "../styles/ProjectDetails.css";

// GitHub API endpoint
const API_URL = "https://api.github.com/users/jlc996/repos";

// Project Details page component
function ProjectDetails() {

  // Get the project name from the URL
  // Example:
  // /projects/frontend-portfolio
  const { id } = useParams();

  // Fetch GitHub repositories
  const {
    data: projects,
    isLoading,
    error,
  } = useFetch(API_URL);

  // Find the selected repository
  const project = projects.find(
    (repo) => repo.name === id
  );

  // Display while data is loading
  if (isLoading) {
    return (
      <section className="project-details">
        <h2>Loading project...</h2>
      </section>
    );
  }

  // Display an error if the API request fails
  if (error) {
    return (
      <section className="project-details">
        <h2>Error</h2>
        <p>{error}</p>

        <Link
          to="/projects"
          className="button secondary-button"
        >
          Back to Projects
        </Link>
      </section>
    );
  }

  // Display a message if no project is found
  if (!project) {
    return (
      <section className="project-details">
        <h2>Project Not Found</h2>

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

  // Render the selected project
  return (
    <section className="project-details">

      {/* Project Name */}
      <h1>{project.name}</h1>

      {/* Project Description */}
      <p className="project-description">
        {project.description || "No description available."}
      </p>

      {/* Project Information Card */}
      <div className="details-card">

        <p>
          <strong>Primary Language:</strong>{" "}
          {project.language || "Not specified"}
        </p>

        <p>
          <strong>Stars:</strong>{" "}
          {project.stargazers_count}
        </p>

        <p>
          <strong>Forks:</strong>{" "}
          {project.forks_count}
        </p>

        <p>
          <strong>Open Issues:</strong>{" "}
          {project.open_issues_count}
        </p>

        <p>
          <strong>Visibility:</strong>{" "}
          {project.visibility}
        </p>

        <p>
          <strong>Created:</strong>{" "}
          {new Date(project.created_at).toLocaleDateString()}
        </p>

        <p>
          <strong>Last Updated:</strong>{" "}
          {new Date(project.updated_at).toLocaleDateString()}
        </p>

      </div>

      {/* Action Buttons */}
      <div className="details-buttons">

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