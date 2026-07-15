// SkillCard.jsx

// Reusable component for displaying skill categories
function SkillCard({ title, skills }) {

  return (

    <div className="skill-card">


      {/* Skill Category Title */}
      <h3>
        {title}
      </h3>



      {/* Skill List */}
      <ul>

        {skills.map((skill, index) => (

          <li key={index}>
            {skill}
          </li>

        ))}

      </ul>


    </div>

  );

}


// Export component
export default SkillCard;