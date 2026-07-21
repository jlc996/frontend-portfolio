// ProjectDetails.jsx

// Import React Router
import { useParams } from "react-router-dom";

// Import reusable fetch hook
import useFetch from "../hooks/useFetch";

// Import reusable components
import LoadingSpinner from "../components/projects/LoadingSpinner";
import ErrorMessage from "../components/projects/ErrorMessage";

// Import Project Details child components
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfoCard from "../components/projects/ProjectInfoCard";
import ProjectActions from "../components/projects/ProjectActions";

// Import page styles
import "../styles/pages/ProjectDetails.css";


// GitHub API endpoint
const API_URL =
  "https://api.github.com/users/jlc996/repos";


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



  // Loading state
  if (isLoading) {

    return (

      <section className="project-details">

        <LoadingSpinner />

      </section>

    );

  }



  // Error state
  if (error) {

    return (

      <section className="project-details">

        <ErrorMessage
          message={error}
        />

      </section>

    );

  }



  // Safely filter projects
  const projectList = (projects || [])
    .filter(
      (project) =>
        !excludedProjects.includes(project.name)
    );



  // Find selected project
  const project = projectList.find(
    (repo) =>
      repo.name === id
  );



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

      </section>

    );

  }



  // Render project details page
  return (

    <section className="project-details">


      {/* ==========================
          Project Header
      ========================== */}

      <ProjectHeader
        project={project}
      />



      {/* ==========================
          Project Information
      ========================== */}

      <ProjectInfoCard
        project={project}
      />



      {/* ==========================
          Action Buttons
      ========================== */}

      <ProjectActions
        project={project}
      />


    </section>

  );

}


// Export component
export default ProjectDetails;