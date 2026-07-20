// ProjectCard.jsx

// Import React Router navigation
import { Link } from "react-router-dom";

// Reusable Project Card component
function ProjectCard({ project }) {

  return (
    <article className="project-card">

      {/* Project Name */}
      <h2>
        {project.name
          .replace(/[-_]/g, " ")
          .replace(/\b\w/g, (letter) => letter.toUpperCase())}
      </h2>

      {/* Project Description */}
      <p>
        {project.description || "No description available."}
      </p>

      {/* Project Information */}
      <div className="project-info">

        <p>
          <strong>Language:</strong>{" "}
          {project.language || "N/A"}
        </p>

        <p>
          <strong>Stars:</strong>{" "}
          {project.stargazers_count}
        </p>

        <p>
          <strong>Updated:</strong>{" "}
          {new Date(project.updated_at).toLocaleDateString()}
        </p>

      </div>

      {/* Action Buttons */}
      <div className="project-buttons">

        {/* View Details Page */}
        <Link
          to={`/projects/${project.name}`}
          className="button primary-button"
        >
          View Details
        </Link>

        {/* Open GitHub Repository */}
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="button secondary-button"
        >
          GitHub
        </a>

      </div>

    </article>
  );
}

// Export component
export default ProjectCard;