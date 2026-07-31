// ProjectDetails.jsx


// Import React Router components
import {
    Link,
    useParams
} from "react-router-dom";


// Import reusable fetch hook
import useFetch from "../hooks/useFetch";


// Import reusable components
import LoadingSpinner from "../components/projects/LoadingSpinner";
import ErrorMessage from "../components/projects/ErrorMessage";


// Import Project Details child components
import ProjectHeader from "../components/projects/projectDetails/ProjectHeader";
import ProjectInfoCard from "../components/projects/projectDetails/ProjectInfoCard";
import ProjectActions from "../components/projects/projectDetails/ProjectActions";


// Import page styles
import styles from "../styles/pages/ProjectDetails.module.css";



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

            <section className={styles.projectDetails}>

                <LoadingSpinner />

            </section>

        );

    }



    // Error state
    if (error) {

        return (

            <section className={styles.projectDetails}>

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



    // ==========================
    // Project Not Found
    // ==========================

    if (!project) {

        return (

            <section className={styles.projectDetails}>


                <h2>
                    Project Not Found
                </h2>



                <p>
                    The requested project could not be found.
                </p>



                {/* Back to Projects Button */}

                <div className={styles.detailsButtons}>

                    <Link
                        to="/projects"
                        className={`${styles.button} ${styles.secondaryButton}`}
                    >

                        Back to Projects

                    </Link>

                </div>


            </section>

        );

    }



    // Render project details page
    return (

        <section className={styles.projectDetails}>


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