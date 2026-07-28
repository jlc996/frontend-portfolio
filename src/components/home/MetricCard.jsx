// MetricCard.jsx


function MetricCard({ value, label }) {


  return (

    <div className="metric-card">


      <h3>
        {value}
      </h3>


      <p>
        {label}
      </p>


    </div>

  );

}


export default MetricCard;