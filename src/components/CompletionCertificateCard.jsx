// CompletionCertificateCard.jsx


function CompletionCertificateCard({ certificate }) {


  return (

    <article className="certificate-card">


      {/* Certificate Image */}
      <img

        src={certificate.image}

        alt={certificate.title}

      />


      {/* Certificate Content */}
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


    </article>

  );

}


export default CompletionCertificateCard;