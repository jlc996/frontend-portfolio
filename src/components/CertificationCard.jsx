// CertificationCard.jsx


function CertificationCard({certificate}){


return(

<div className="certificate-card">


<img

src={certificate.image}

alt={certificate.title}

/>


<h3>
{certificate.title}
</h3>


<p>
{certificate.description}
</p>


</div>

);


}


export default CertificationCard;