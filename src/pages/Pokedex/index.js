import React from 'react';

// Components
import MainMenu from '../../components/Menu';

import './styles.css';

export default function Pokedex() {
  return (
    <div id="Pokedex">
      <MainMenu />
      <h1 className="title">Hello Pokedex!</h1>
    </div>
  );
}
