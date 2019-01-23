import React from "react";
import "./CharecterCard.css";

const CharecterCard = props => (
    <div className="card">
    <div className="img-container hoverable">
    <img onClick={() => props.shuffleCharecters(props.id)} className="remove" alt={props.name} src={props.image} />
    </div>
    {/* <div className="content">
    <ul>
        <li>
            <strong>Name:</strong> {props.name}
        </li>
    </ul>
    </div> */}
    {/* Need and on click event for when the user clicks the charecter it increments the score.  Also need an event where if the user clicks the same charecter twice it resets the score to zero. */}
    </div>
);

export default CharecterCard;