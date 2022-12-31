import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';

import PokeCard from '../../components/PokeCard';

import './styles.css';

export default function PokeList({ name, defaultNextPage }) {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState(defaultNextPage);

  // Get info from pokeapi
  useEffect(() => {
    getPokeInfo();
  }, []);

  const observer = useRef()
  const bottomRef = useCallback(node => {
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && nextPage !== null) {
        handleLoadMore()
      }
    })
    if (node) observer.current.observe(node)
  }, [nextPage]);

  async function getPokeInfo() {
    const { data } = await axios.get(nextPage);

    console.log(data)

    const { next = null, results, pokemon_entries } = data;

    if (results) {
      setPokemons([...pokemons, ...results]);
    } else if (pokemon_entries) {
      setPokemons([...pokemons, ...pokemon_entries.map(pokemon => ({
        name: pokemon.pokemon_species.name,
        url: pokemon.pokemon_species.url.split('-species').join('')
      }))]);
    }

    setNextPage(next);
  }

  function handleLoadMore() {
    getPokeInfo();
  }

  return (
    <>
      <div id="pokeList">
        {pokemons.map((pokemon, index) => (
          <PokeCard
            key={index}
            index={index + 1}
            id={pokemon.url.split('/')[6]}
            name={pokemon.name}
            info={pokemon.url}
          />
        ))}
      </div>
      <footer id="pokeFooter">
        {nextPage !== null ? (
          <button ref={bottomRef} onClick={handleLoadMore}>More!</button>
        ) : (
          <></>
        )}
      </footer>
    </>
  );
}
