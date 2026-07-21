// ProjectHeader.jsx

// Import project topics component
import ProjectTopics from "./ProjectTopics";


// Format GitHub repository names
// Removes hyphens and underscores
// Capitalizes the first letter of each word
function formatProjectName(name) {

  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) =>
      letter.toUpperCase()
    );

}


// Project Header component
function ProjectHeader({ project }) {

  return (

    <header className="project-details-header">

      {/* ==========================
          Project Title
      ========================== */}

      <h1>

        {formatProjectName(project.name)}

      </h1>



      {/* ==========================
          Project Description
      ========================== */}

      <p className="project-description">

        {project.description ||
          "This repository does not currently include a project description."}

      </p>



      {/* ==========================
          Project Topics
      ========================== */}

      <ProjectTopics
        topics={project.topics}
      />

    </header>

  );

}


// Export component
export default ProjectHeader;