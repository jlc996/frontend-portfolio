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
const API_URL = "https://api.github.com/users/jlc996/repos";


// Repositories to hide from portfolio
const excludedProjects = [
  "Software-Design"
];


// Projects page component
function Projects() {


  // Store search input
  const [searchTerm, setSearchTerm] = useState("");



  // Fetch GitHub repositories
  const {
    data: projects,
    isLoading,
    error,
  } = useFetch(API_URL);



  // Filter portfolio projects
  const filteredProjects = (projects || [])

    // Remove unwanted repositories
    .filter(
      (project) =>
        !excludedProjects.includes(project.name)
    )

    // Search remaining projects
    .filter((project) =>
      project.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );



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
          Browse my GitHub repositories and explore the applications
          I've built using modern frontend technologies.
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

        placeholder="Search portfolio projects..."

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

        <ErrorMessage message={error} />

      )}






      {/* ==========================
          Project Grid
      ========================== */}

      {!isLoading && !error && (

        <div className="project-grid">


          {filteredProjects.length > 0 ? (

            filteredProjects.map((project) => (


              <ProjectCard

                key={project.id}

                project={project}

              />


            ))


          ) : (


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