// TechStack.jsx

import TechCard from "./TechCard";

import "../styles/TechStack.css";


// Technology data

const technologies = [

  "React",

  "JavaScript",

  "HTML5",

  "CSS3",

  "Bootstrap 5",

  "Git & GitHub"

];



function TechStack() {


  return (

    <section className="tech-stack">


      <h2>
        Core Technologies
      </h2>



      <div className="tech-grid">


        {technologies.map((technology, index) => (

          <TechCard

            key={index}

            technology={technology}

          />

        ))}


      </div>


    </section>

  );

}


export default TechStack;