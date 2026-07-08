// Projects.jsx

// Import React state
import { useState } from "react";

// Import the custom fetch hook
import useFetch from "../hooks/useFetch";

// Import reusable components
import ProjectCard from "../components/ProjectCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

// Import page styles
import "../styles/Projects.css";

// GitHub API URL
const API_URL = "https://api.github.com/users/jlc996/repos";

// Projects page component
function Projects() {
  // Store the user's search input
  const [searchTerm, setSearchTerm] = useState("");

  // Retrieve repository data from the custom hook
  const {
    data: projects,
    isLoading,
    error,
  } = useFetch(API_URL);

  // Filter repositories by name
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="projects">

      {/* Page Heading */}
      <h1>My Projects</h1>

      <p>
        Browse my GitHub repositories and explore the applications
        I've built using modern frontend technologies.
      </p>

      {/* Search Box */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {/* Loading Indicator */}
      {isLoading && <LoadingSpinner />}

      {/* Error Message */}
      {error && <ErrorMessage message={error} />}

      {/* Project Grid */}
      {!isLoading && !error && (
        <div className="project-grid">

          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>
      )}

    </section>
  );
}

// Export component
export default Projects;