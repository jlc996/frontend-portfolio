// Home.jsx


import Hero from "../components/home/Hero";

import TechStack from "../components/home/TechStack";

import Metrics from "../components/home/Metrics";


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