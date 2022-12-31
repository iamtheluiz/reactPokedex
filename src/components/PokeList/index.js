import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';

import PokeCard from '../../components/PokeCard';

import './styles.css';

export default function PokeList() {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState('https://pokeapi.co/api/v2/pokemon/?limit=60&offset=0');

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

    const { next, results } = data;

    setPokemons([...pokemons, ...results]);
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
