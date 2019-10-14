import React, { useState, useEffect } from 'react';
import axios from 'axios';

import colors from '../../config/colors';

import './styles.css';

export default function PokeCard(props) {
  const [pokeNum, setPokeNum] = useState(props.index.toString().split('').length);
  const [types, setTypes] = useState([{
    type: {
      name: ""
    }
  }]);

  useEffect(() => {
    let num = '';

    for (let i = pokeNum; i < 3; i++) {
      num += '0';
    }

    num += props.index;
    setPokeNum(num);

    // Get pokemon info
    getPokemonInfo();
  }, []);

  async function getPokemonInfo() {
    const { data } = await axios.get(props.info);

    setTypes(data.types.reverse());
  }

  return (
    <div className="pokeCard" style={{ backgroundColor: colors[types[0].type.name] }}>
      <strong>{props.name}</strong>
      <p>#{pokeNum}</p>
      {types.map(type => <span key={type.type.name} className="pokeType">{type.type.name}</span>)}
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeNum}.png`} alt="Pokemon"/>
    </div>
  );
}
