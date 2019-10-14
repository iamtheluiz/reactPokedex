import React, { useState, useEffect } from 'react';

import './styles.css';

export default function PokeCard(props) {
  const [pokeNum, setPokeNum] = useState(props.index.toString().split('').length);

  useEffect(() => {
    let num = '';

    console.log();

    for (let i = pokeNum; i < 3; i++) {
      num += '0';
    }

    num += props.index;
    setPokeNum(num);
  }, []);

  return (
    <div className="pokeCard">
      <strong>{props.name}</strong>
      {props.type.map(type => <span key={type} className="pokeType">{type}</span>)}
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeNum}.png`} alt="Pokemon"/>
    </div>
  );
}
