import React from 'react';
import './styles.css';

// Components
import MainMenu from '../../components/Menu';
import IndexItem from '../../components/IndexItem';

export default function Index() {
  return (
    <div id="Index">
      <MainMenu displayNone href="#!" />
      <h1 className="title">Pokemon!</h1>
      <div id="items">
        <IndexItem href="/pokedex" title="Pokedex" color="#4bc1a7" />
        <IndexItem href="/pokedex" title="Pokedex" color="#4bc1a7" />
        <IndexItem href="/pokedex" title="Pokedex" color="#4bc1a7" />
        <IndexItem href="/pokedex" title="Pokedex" color="#4bc1a7" />
      </div>
    </div>
  );
}