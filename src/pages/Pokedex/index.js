import React, { useEffect } from 'react';

// Components
import MainMenu from '../../components/Menu';
import PokeList from '../../components/PokeList';

import './styles.css';

export default function Pokedex() {
  useEffect(() => {
    document.querySelector("meta[name='theme-color']").setAttribute("content", "#000");
  }, []);

  return (
    <div id="Pokedex">
      <MainMenu href="/" />
      <h1 className="title">Hello Pokedex!</h1>
      <PokeList />
    </div>
  );
}
