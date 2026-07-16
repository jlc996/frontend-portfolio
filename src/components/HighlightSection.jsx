// HighlightSection.jsx

// Import reusable highlight card
import HighlightCard from "./HighlightCard";

// Import styles
import "../styles/HighlightSection.css";


// Professional highlights section component
function HighlightSection({ highlights }) {

    return (

        <section className="highlights">


            {/* Section Header */}
            <h2>
                Professional Highlights
            </h2>



            {/* Highlight Cards */}
            <div className="highlights-grid">


                {highlights.map((highlight) => (

                    <HighlightCard

                        key={highlight.id}

                        title={highlight.title}

                        description={highlight.description}

                    />

                ))}


            </div>


        </section>

    );

}


export default HighlightSection;