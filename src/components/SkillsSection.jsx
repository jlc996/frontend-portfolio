// SkillsSection.jsx

import SkillCard from "./SkillCard";

import "../styles/SkillsSection.css";


const skills = [

{
id:1,
title:"Frontend",
skills:[
"HTML5",
"CSS3",
"JavaScript ES6+",
"React",
"React Router",
"Bootstrap 5",
"Responsive Design"
]
},


{
id:2,
title:"API & Data",
skills:[
"REST APIs",
"Fetch API",
"Async/Await",
"JSON",
"Local Storage"
]
},


{
id:3,
title:"Tools & Technologies",
skills:[
"Git",
"GitHub",
"VS Code",
"Vite",
"Chrome DevTools",
"npm"
]
}

];



function SkillsSection(){


return(

<section className="skills-section">


<h2>
Technical Skills
</h2>


<div className="skills-grid">


{skills.map((category)=>(

<SkillCard

key={category.id}

title={category.title}

skills={category.skills}

/>

))}


</div>


</section>

);

}


export default SkillsSection;