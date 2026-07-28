// ProjectTopics.jsx


// Project Topics component
function ProjectTopics({ topics }) {


  // Do not render anything
  // if the project has no topics
  if (!topics?.length) {

    return null;

  }


  // Render project topics
  return (

    <div className="project-topics">

      {topics.map((topic) => (

        <span
          key={topic}
          className="topic-badge"
        >

          {topic}

        </span>

      ))}

    </div>

  );

}


// Export component
export default ProjectTopics;