// Timeline.jsx


// Import timeline data
import {
    timelineItems
} from "../../data/experienceData";


// Import styles
import styles from "../../styles/experience/Timeline.module.css";



function Timeline() {


    return (

        <section className={styles.timeline}>


            <h2>
                Development Journey
            </h2>



            {
                timelineItems.map((item) => (

                    <div
                        className={styles.timelineItem}
                        key={item.id}
                    >


                        <h3>
                            {item.title}
                        </h3>



                        <p>
                            {item.text}
                        </p>


                    </div>

                ))
            }


        </section>

    );

}


export default Timeline;