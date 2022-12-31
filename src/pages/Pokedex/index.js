import React, { useEffect, useState } from 'react';

// Components
import MainMenu from '../../components/Menu';
import PokeList from '../../components/PokeList';

import './styles.css';

export default function Pokedex({ match }) {
  const [api, setApi] = useState("")

  useEffect(() => {
    document.querySelector("meta[name='theme-color']").setAttribute("content", "#000");

    if (match.params.name === "pokedex") {
      setApi("https://pokeapi.co/api/v2/pokemon/?limit=60&offset=0")
    } else {
      setApi(`https://pokeapi.co/api/v2/pokedex/${match.params.name}/`)
    }
  }, [match]);

  return (
    <div id="Pokedex">
      <MainMenu href="/" />
      <h1 className="title">{match.params.name.split('-').join(' ')}</h1>
      {api !== "" && <PokeList name={match.params.name} defaultNextPage={api} />}
    </div>
  );
}
