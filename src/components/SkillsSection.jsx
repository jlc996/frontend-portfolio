// SkillsSection.jsx

// Import reusable component
import SkillCard from "./SkillCard";

// Import skill data
import {
  skillCategories
} from "../data/experienceData";

// Import styles
import "../styles/SkillsSection.css";


// Skills section component
function SkillsSection() {

  return (

    <section className="skills-section">


      {/* Section Heading */}
      <h2>
        Technical Skills
      </h2>



      {/* Skill Cards Grid */}
      <div className="skills-grid">


        {
          skillCategories.map((category) => (

            <SkillCard

              key={category.id}

              title={category.title}

              skills={category.skills}

            />

          ))
        }


      </div>


    </section>

  );

}


// Export component
export default SkillsSection;