import React, { useEffect, useState } from 'react';
import './styles.css';

// Components
import MainMenu from '../../components/Menu';
import IndexItem from '../../components/IndexItem';

export default function Index() {
  const [pokedexes, setPokedexes] = useState([
    {
      name: "pokedex"
    }
  ])
  const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokedex/")

  useEffect(() => {
    if (nextPage !== null) {
      getPokedexes()
    }
  }, [nextPage])

  async function getPokedexes() {
    const response = await fetch(nextPage)
    const data = await response.json()

    setNextPage(data.next)
    setPokedexes(prev => {
      return [...prev, ...data.results]
    })
  }

  return (
    <div id="Index">
      <MainMenu displayNone href="#!" />
      <h1 className="title">Pokemon!</h1>
      <div id="items">
        {pokedexes.map(pokedex =>
          <IndexItem
            href={`/${pokedex.name}`}
            title={`${pokedex.name.split('-').join(' ')}`}
            color="#4bc1a7"
          />
        )}
      </div>
    </div>
  );
}