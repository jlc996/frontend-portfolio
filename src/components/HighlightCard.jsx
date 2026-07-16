import "../styles/HighlightCard.css";

function HighlightCard({title,text}){

return(

<div className="highlight-card">


<h3>
{title}
</h3>


<p>
{text}
</p>


</div>

);


}


export default HighlightCard;