import React from 'react';

import PokeCard from '../../components/PokeCard';

import './styles.css';

export default function pokeList() {
  return (
    <div id="pokeList">
      <PokeCard
        name="Bulbasaur"
        type={["Grass", "Poison"]}
        src="https://upload.wikimedia.org/wikipedia/pt/0/0c/001_Bulbasaur.png"
      />
      <PokeCard
        name="Bulbasaur"
        type={["Grass", "Poison"]}
        src="https://upload.wikimedia.org/wikipedia/pt/0/0c/001_Bulbasaur.png"
      />
      <PokeCard
        name="Bulbasaur"
        type={["Grass", "Poison"]}
        src="https://upload.wikimedia.org/wikipedia/pt/0/0c/001_Bulbasaur.png"
      />
      <PokeCard
        name="Bulbasaur"
        type={["Grass", "Poison"]}
        src="https://upload.wikimedia.org/wikipedia/pt/0/0c/001_Bulbasaur.png"
      />
    </div>
  );
}
