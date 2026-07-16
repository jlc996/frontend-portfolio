// CompletionCertificateSection.jsx


// Import reusable component
import CompletionCertificateCard from "./CompletionCertificateCard";


// Import certificate data
import {
  completionCertificates
} from "../data/experienceData";


// Import styles
import "../styles/CompletionCertificateSection.css";



function CompletionCertificateSection() {


  return (

    <section className="completion-certificates">


      <h2>
        Completion Certificates
      </h2>



      <p>
        Official module completion certificates earned while completing
        the Full Stack Development program at Mississippi Coding Academies.
      </p>



      <div className="certificate-grid">


        {
          completionCertificates.map((certificate) => (

            <CompletionCertificateCard

              key={certificate.id}

              certificate={certificate}

            />

          ))
        }


      </div>


    </section>

  );

}


export default CompletionCertificateSection;