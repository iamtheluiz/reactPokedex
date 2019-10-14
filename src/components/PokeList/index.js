import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PokeCard from '../../components/PokeCard';

import './styles.css';

export default function PokeList() {
  const [pokemons, setPokemons] = useState([]);
  const [pokeCount, setPokeCount] = useState(0);
  const [nextPage, setNextPage] = useState('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0');

  // Get info from pokeapi
  useEffect(() => {
    getPokeInfo();
  }, []);

  async function getPokeInfo() {
    const { data } = await axios.get(nextPage);

    const { count, next, results } = data;

    setPokemons([...pokemons, ...results]);
    setPokeCount(count);
    setNextPage(next);
  }

  function handleLoadMore() {
    getPokeInfo();
  }

  return (
    <div id="pokeList">
      {pokemons.map((pokemon, index) => (
        <PokeCard
          key={index}
          index={index + 1}
          name={pokemon.name}
          type={["Grass", "Poison"]}
        />
      ))}
      {nextPage !== null ? (
        <button onClick={handleLoadMore}>More!</button>
      ) : (
        <p>End!</p>
      )}
    </div>
  );
}
