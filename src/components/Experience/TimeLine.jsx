import "../../styles/Timeline.css";


const timelineItems=[

{
title:"2026 – Full Stack Development Foundations",
text:"Learned HTML5, CSS3, Git, GitHub, and JavaScript fundamentals while completing Collab Computers."
},

{
title:"2026 – JavaScript Application Development",
text:"Built dynamic applications using DOM manipulation, Local Storage, and reusable rendering functions."
},

{
title:"2026 – Modern React Development",
text:"Built React applications using components, hooks, routing, and API integration."
},

{
title:"2026 – Frontend Engineering Capstone",
text:"Created this React portfolio using Vite, React Router, custom hooks, and REST APIs."
}

];


function Timeline(){


return(

<section className="timeline">


<h2>
Development Journey
</h2>


{timelineItems.map((item,index)=>(

<div 
className="timeline-item"
key={index}
>


<h3>
{item.title}
</h3>


<p>
{item.text}
</p>


</div>

))}


</section>

);


}


export default Timeline;