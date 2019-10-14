import React from 'react';

import './styles.css';

export default function PokeCard(props) {
  return (
    <div className="pokeCard">
      <strong>{props.name}</strong>
      {props.type.map(type => <span key={type} className="pokeType">{type}</span>)}
      <img src={props.src} alt="Pokemon"/>
    </div>
  );
}
