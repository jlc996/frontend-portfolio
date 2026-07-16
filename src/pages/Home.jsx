// Home.jsx


import Hero from "../components/Hero";

import TechStack from "../components/TechStack";

import Metrics from "../components/Metrics";


import "../styles/Home.css";



function Home() {


  return (

    <section className="home">


      <Hero />


      <TechStack />


      <Metrics />


    </section>

  );

}


export default Home;