import React from 'react';
import './styles.css';

// Components
import IndexItem from '../../components/IndexItem';

import pokedexIcon from '../../assets/pokeball.jpg';

export default function Index() {
  return (
    <div id="Index">
      <h1>Pokemon!</h1>
      <img src={pokedexIcon} alt="Pokedex Icon"/>
      <div id="items">
        <IndexItem href="/pokedex" title="Pokedex" color="#4bc1a7" />
        <IndexItem href="/pokedex" title="Pokedex" color="#4bc1a7" />
        <IndexItem href="/pokedex" title="Pokedex" color="#4bc1a7" />
        <IndexItem href="/pokedex" title="Pokedex" color="#4bc1a7" />
      </div>
    </div>
  );
}