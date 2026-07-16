function CompletionCertificateCard({certificate}){


return(

<div className="certificate-card">


<img

src={certificate.image}

alt={certificate.title}

/>


<div className="certificate-content">


<h3>
{certificate.title}
</h3>


<h4>
{certificate.issuer}
</h4>


<p>
{certificate.description}
</p>


</div>


</div>

);


}


export default CompletionCertificateCard;