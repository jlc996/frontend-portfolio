// HighlightSection.jsx


// Import highlight data
import {
  highlights
} from "../data/experienceData";


// Import styles
import "../styles/HighlightSection.css";



// Highlight Section Component
function HighlightSection() {


  return (

    <section className="highlights">


      {/* Section Heading */}
      <h2>
        Professional Highlights
      </h2>



      <div className="highlights-grid">


        {
          highlights.map((highlight) => (

            <article

              key={highlight.id}

              className="highlight-card"

            >


              <h3>
                {highlight.title}
              </h3>



              <p>
                {highlight.description}
              </p>


            </article>

          ))
        }


      </div>


    </section>

  );

}



export default HighlightSection;