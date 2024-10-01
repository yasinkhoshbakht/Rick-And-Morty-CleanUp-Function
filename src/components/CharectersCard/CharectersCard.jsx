import React from "react";
import "./CharectersCard.css";

function CharectersCard({ character }) {
  return (
    <div className="cardContainer">
      <div className="card">
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Location: {character.location.name}</p>
      </div>
    </div>
  );
}

export default CharectersCard;
