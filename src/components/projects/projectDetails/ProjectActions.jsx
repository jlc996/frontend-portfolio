// ProjectActions.jsx

// Import React Router Link
import { Link } from "react-router-dom";


// Project Actions component
function ProjectActions({ project }) {


  return (

    <div className="details-buttons">


      {/* ==========================
          Live Demo Button
          Only displays if a
          homepage URL exists
      ========================== */}

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



      {/* ==========================
          GitHub Button
      ========================== */}

      <a
        href={project.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="button primary-button"
      >

        View on GitHub

      </a>



      {/* ==========================
          Back to Projects Button
      ========================== */}

      <Link
        to="/projects"
        className="button secondary-button"
      >

        Back to Projects

      </Link>


    </div>

  );

}


// Export component
export default ProjectActions;