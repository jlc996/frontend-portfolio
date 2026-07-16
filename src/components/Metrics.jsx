// Metrics.jsx

import MetricCard from "./MetricCard";

import "../styles/Metrics.css";



const metrics = [

  {
    id: 1,
    value: "10+",
    label: "Projects Built"
  },


  {
    id: 2,
    value: "React",
    label: "Frontend Framework"
  },


  {
    id: 3,
    value: "REST APIs",
    label: "API Integration"
  }

];



function Metrics() {


  return (

    <section className="metrics">


      {metrics.map((metric) => (

        <MetricCard

          key={metric.id}

          value={metric.value}

          label={metric.label}

        />

      ))}


    </section>

  );

}


export default Metrics;