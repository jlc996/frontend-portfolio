import CertificationCard from "./CertificationCard";

import htmlBadge from "../assets/badges/html-badge.png";
import cssBadge from "../assets/badges/css-badge.png";
import javascriptBadge from "../assets/badges/javascript-badge.png";


const badges=[

{
id:1,
title:"HTML5 Certification",
image:htmlBadge,
description:"Semantic HTML and accessibility skills."
},

{
id:2,
title:"CSS3 Certification",
image:cssBadge,
description:"Responsive layouts using modern CSS."
},

{
id:3,
title:"JavaScript Certification",
image:javascriptBadge,
description:"ES6+, DOM, events, and applications."
}

];


function CertificationSection(){


return(

<section className="certifications">


<h2>
Certifications & Badges
</h2>


<div className="certification-grid">


{badges.map((certificate)=>(

<CertificationCard

key={certificate.id}

certificate={certificate}

/>

))}


</div>


</section>

);


}


export default CertificationSection;