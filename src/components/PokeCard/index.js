import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import colors from '../../config/colors';

import './styles.css';

function PokeCard(props) {
  const [pokeNum, setPokeNum] = useState(props.index.toString().split('').length);
  const [pokemonData, setPokemonData] = useState({
    types: [{
      type: {
        name: ""
      }
    }]
  });

  useEffect(() => {
    let num = '';

    for (let i = pokeNum; i < 3; i++) {
      num += '0';
    }

    num += props.index;
    setPokeNum(num);

    // Get pokemon info
    getPokemonInfo(num);
  }, []);

  async function getPokemonInfo(num) {
    let { data } = await axios.get(props.info);

    data.types = data.types.reverse();
    data.num = num;

    setPokemonData(data);
  }

  function handleUserClick() {
    localStorage.setItem('@react-pokedex/pokemon', JSON.stringify(pokemonData));

    props.history.push('/pokemon/');
  }

  return (
    <div className="pokeCard" style={{ backgroundColor: colors[pokemonData.types[0].type.name] }} onClick={handleUserClick}>
      <strong>{props.name}</strong>
      <p>#{pokeNum}</p>
      {pokemonData.types.map(type => <span key={type.type.name} className="pokeType">{type.type.name}</span>)}
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeNum}.png`} alt="Pokemon"/>
    </div>
  );
}

export default withRouter(PokeCard);