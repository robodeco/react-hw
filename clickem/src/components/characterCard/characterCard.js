import React from "react";
import "./characterCard.css";

const CharacterCard = props => (
// <button onClick={() => props.handleClick()}>
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
    </div>
  </div>
// </button>
//need to discuss this in office hours: see App.js for further details.
);

export default CharacterCard;
