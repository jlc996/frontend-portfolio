// CompletionCertificateSection.jsx

// Import reusable certificate card
import CompletionCertificateCard from "./CompletionCertificateCard";

// Import styles
import "../styles/CompletionCertificateSection.css";


// Completion certificate section component
function CompletionCertificateSection({ certificates }) {

    return (

        <section className="completion-certificates">


            {/* Section Header */}
            <h2>
                Completion Certificates
            </h2>


            <p>
                Official module completion certificates earned while
                completing the Full Stack Development program at
                Mississippi Coding Academies.
            </p>



            {/* Certificate Grid */}
            <div className="completion-certificate-grid">


                {certificates.map((certificate) => (

                    <CompletionCertificateCard

                        key={certificate.id}

                        certificate={certificate}

                    />

                ))}


            </div>


        </section>

    );

}


export default CompletionCertificateSection;