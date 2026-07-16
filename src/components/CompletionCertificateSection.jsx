// CompletionCertificateSection.jsx


// Import certificate data
import {
  completionCertificates
} from "../data/experienceData";


// Import styles
import "../styles/CompletionCertificateSection.css";



// Completion Certificate Section Component
function CompletionCertificateSection() {


  return (

    <section className="completion-certificates">


      {/* Section Heading */}
      <h2>
        Completion Certificates
      </h2>



      <p>
        Official module completion certificates earned while completing
        the Full Stack Development program at Mississippi Coding Academies.
      </p>




      {/* Certificate Grid */}
      <div className="certificate-grid">


        {
          completionCertificates.map((certificate) => (

            <article
              key={certificate.id}
              className="certificate-card"
            >



              {/* Certificate Image */}
              <img

                src={certificate.image}

                alt={certificate.title}

              />



              {/* Certificate Information */}
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

          ))
        }


      </div>


    </section>

  );

}


// Export Component
export default CompletionCertificateSection;