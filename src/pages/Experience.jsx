// Experience.jsx

import "../styles/Experience.css";

import SkillsSection from "../components/Experience/SkillsSection";
import CertificationSection from "../components/Experience/CertificationSection";
import CompletionCertificateSection from "../components/Experience/CompletionCertificateSection";
import Timeline from "../components/Experience/TimeLine";
import HighlightSection from "../components/Experience/HighlightSection";


function Experience() {


  return (

    <section className="experience">


      <header className="experience-header">

        <h1>
          Experience & Skills
        </h1>


        <p>
          Throughout my journey at Mississippi Coding Academies,
          I have developed a strong foundation in modern frontend
          development by building responsive websites, interactive
          JavaScript applications, and React Single Page Applications.
        </p>

      </header>



      <SkillsSection />


      <CertificationSection />


      <CompletionCertificateSection />


      <Timeline />


      <HighlightSection />


    </section>

  );

}


export default Experience;