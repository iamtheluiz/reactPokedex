import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import colors from '../../config/colors';

import './styles.css';

function PokeCard(props) {
  console.log(props.id.split(''))
  const [pokeNum, setPokeNum] = useState(props.id.split('').length);
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

    num += props.id;
    setPokeNum(num);

    // Get pokemon info
    getPokemonInfo(num);
  }, []);

  async function getPokemonInfo(num) {
    let { data } = await axios.get(props.info);

    data.num = num;

    setPokemonData(data);
  }

  function handleUserClick() {
    localStorage.setItem('@react-pokedex/pokemon', JSON.stringify(pokemonData));

    props.history.push('/pokemon/');
  }

  return (
    <div
      className="pokeCard"
      style={{ backgroundColor: colors[pokemonData.types[0].type.name] }}
      onClick={handleUserClick}
    >
      <header>
        <strong>{props.name}</strong>
        <p>#{pokeNum}</p>
      </header>
      <div className="body">
        <div className="typesContainer">
          {pokemonData.types.map(type => <span key={type.type.name} className="pokeType">{type.type.name}</span>)}
        </div>
        <div className="imageContainer">
          <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeNum}.png`} alt="Pokemon" />
        </div>
      </div>
    </div>
  );
}

export default withRouter(PokeCard);