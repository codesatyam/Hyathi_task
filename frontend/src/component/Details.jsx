import React from 'react';
import "../assets/styles/Details.css"
const Details = ({ onClose ,id,name,hp,moves,weight,height,attack,defense}) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <div className="image">
        {/* image section */}
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt="API"/>
          <h4>{name}</h4>
        </div>
         <div className="pokemon-details">
            <span>Id:- {id}</span>
            <span>Health:- {hp}</span>
            <span>Moves:- {moves}</span>
            <span>Weight:- {weight}</span>
            <span>Height:- {height}</span>
            <span>Attack:- {attack}</span>
            <span>Defense:- {defense}</span>
         </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Details;
