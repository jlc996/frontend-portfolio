// Projects.jsx

// Import React state
import { useState } from "react";

// Import custom fetch hook
import useFetch from "../hooks/useFetch";

// Import reusable components
import ProjectCard from "../components/projects/ProjectCard";
import SearchBar from "../components/projects/SearchBar";
import LoadingSpinner from "../components/projects/LoadingSpinner";
import ErrorMessage from "../components/projects/ErrorMessage";

// Import page stylesheet
import "../styles/pages/Projects.css";


// GitHub API URL
const API_URL =
  "https://api.github.com/users/jlc996/repos";


// Repositories to hide from portfolio
const excludedProjects = [
  "Software-Design"
];


// Projects page component
function Projects() {


  // ==========================
  // Search State
  // ==========================

  // Store the user's search input
  const [searchTerm, setSearchTerm] = useState("");



  // ==========================
  // Fetch GitHub Repositories
  // ==========================

  const {
    data: projects,
    isLoading,
    error,
  } = useFetch(API_URL);



  // ==========================
  // Normalize Search Input
  // ==========================

  // Remove extra spaces and convert
  // the search term to lowercase
  const normalizedSearchTerm =
    searchTerm.trim().toLowerCase();



  // ==========================
  // Filter Projects
  // ==========================

  const filteredProjects = (projects || [])

    // Remove unwanted repositories
    .filter(
      (project) =>
        !excludedProjects.includes(project.name)
    )

    // Search project information
    .filter((project) => {


      // Project name
      const projectName =
        project.name?.toLowerCase() || "";


      // Project description
      const projectDescription =
        project.description?.toLowerCase() || "";


      // Primary programming language
      const projectLanguage =
        project.language?.toLowerCase() || "";


      // GitHub repository topics
      const projectTopics =
        project.topics
          ?.join(" ")
          .toLowerCase() || "";



      // Return projects that match
      // any searchable field
      return (

        projectName.includes(
          normalizedSearchTerm
        ) ||

        projectDescription.includes(
          normalizedSearchTerm
        ) ||

        projectLanguage.includes(
          normalizedSearchTerm
        ) ||

        projectTopics.includes(
          normalizedSearchTerm
        )

      );

    });



  // ==========================
  // Render Projects Page
  // ==========================

  return (

    <section className="projects">


      {/* ==========================
          Page Header
      ========================== */}

      <header className="projects-header">

        <h1>
          My Projects
        </h1>

        <p>
          Browse my GitHub repositories and explore
          the applications I've built using modern
          frontend technologies.
        </p>

      </header>



      {/* ==========================
          Search Projects
      ========================== */}

      <SearchBar

        value={searchTerm}

        onChange={(event) =>
          setSearchTerm(event.target.value)
        }

        placeholder="Search projects by name, technology, or topic..."

      />



      {/* ==========================
          Loading State
      ========================== */}

      {isLoading && (

        <LoadingSpinner />

      )}



      {/* ==========================
          Error State
      ========================== */}

      {error && (

        <ErrorMessage
          message={error}
        />

      )}



      {/* ==========================
          Project Grid
      ========================== */}

      {!isLoading && !error && (

        <div className="project-grid">


          {/* ==========================
              Matching Projects
          ========================== */}

          {filteredProjects.length > 0 ? (

            filteredProjects.map((project) => (

              <ProjectCard

                key={project.id}

                project={project}

              />

            ))

          ) : (


            /* ==========================
               No Search Results
            ========================== */

            <p className="no-projects">

              No portfolio projects found.

            </p>

          )}


        </div>

      )}


    </section>

  );

}


// Export component
export default Projects;