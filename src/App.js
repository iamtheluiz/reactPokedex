import React from 'react';

// Website Routes
import Routes from './routes';

import pokeballIcon from './assets/pokeball.jpg';

// Component
export default function App() {
  return (
    <div className="container">
      <img id="pokeballIcon" src={pokeballIcon} alt="Pokeball Icon"/>
      <Routes />
    </div>
  );
}