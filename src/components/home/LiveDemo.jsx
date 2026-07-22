import "../../styles/home/LiveDemo.css";

function LiveDemo() {

    const demoUrl = "https://jlc996.github.io/Digital_Timekeeper/";

    return (

        <section className="live-demo-section">

            <div className="live-demo-container">

                {/* Section Header */}

                <div className="live-demo-header">

                    <h2>Live Demo</h2>

                    <p>
                        Try my Digital Timekeeper project directly
                        from my portfolio.
                    </p>

                </div>


                {/* Live Demo Card */}

                <div className="live-demo-card">

                    {/* Project Preview */}

                    <div className="live-demo-preview">

                        <iframe
                            src={demoUrl}
                            title="Digital Timekeeper Live Demo"
                            loading="lazy"
                        />

                    </div>


                    {/* Project Information */}

                    <div className="live-demo-content">

                        <span className="project-label">
                            Featured Project
                        </span>

                        <h3>Digital Timekeeper</h3>

                        <p>
                            A responsive digital timekeeping application
                            featuring a live clock, time format controls,
                            and a theme toggle.
                        </p>


                        {/* Action Buttons */}

                        <div className="live-demo-actions">

                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="live-demo-button"
                            >
                                Open Full Demo
                            </a>

                            <a
                                href="https://github.com/jlc996/Digital_Timekeeper"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="live-demo-button secondary"
                            >
                                View Source
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default LiveDemo;