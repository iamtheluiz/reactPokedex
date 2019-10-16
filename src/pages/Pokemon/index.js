import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import MainMenu from '../../components/Menu';

import colors from '../../config/colors';

import './styles.css';

export default function Pokemon() {
  const [info, setInfo] = useState({
    types: [{
      type: {
        name: ""
      }
    }],
    egg_groups: [],
    abilities: [],
    stats: [],
  });
  const [tabs, setTabs] = useState({
    about: {},
    stats: { display: "none" },
    evolution: { display: "none" },
  });

  useEffect(() => {
    let pokemonData = JSON.parse(localStorage.getItem('@react-pokedex/pokemon'));

    getPokemonSpecies(pokemonData);
  }, []);

  async function getPokemonSpecies(pokemonData) {
    let response = await axios.get(pokemonData.species.url);

    pokemonData.specie = response.data.genera[2].genus.split(" Pokémon")[0];
    
    let abilities = [];

    pokemonData.abilities.map(ability => {
      abilities.push(ability.ability.name);
    });

    pokemonData.abilities = abilities;
    
    let egg_groups = [];

    response.data.egg_groups.map(egg => {
      egg_groups.push(egg.name);
    });

    pokemonData.egg_groups = egg_groups;
    
    setInfo(pokemonData);

    document.querySelector("meta[name='theme-color']").setAttribute("content", colors[pokemonData.types[0].type.name]);
  }

  function getActiveTab(tab) {
    if(tabs[tab].display === undefined) {
      return { borderBottom: "2px solid black", color: "black", fontSize: "16px" };
    } else {
      return {};
    }
  }

  function handleTab(tab) {
    let tabStyles = {
      about: { display: "none" },
      stats: { display: "none" },
      evolution: { display: "none" },
    };

    tabStyles[tab] = {};

    setTabs(tabStyles);
  }

  return (
    <div id="Pokemon" style={{ backgroundColor: colors[info.types[0].type.name]}}>
      <MainMenu href="/pokedex/" white />
      <h1 className="title">{info.name}</h1>
      <div id="types">
        {info.types.map(type => <span key={type.type.name} className="pokeType">{type.type.name}</span>)}
      </div>
      <div id="pokemonImage">
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${info.num}.png`} alt="Pokemon"/>
      </div>
      <div id="pokemonInfo">
        <div id="tabs">
          <button className="item" style={getActiveTab("about")} onClick={() => handleTab("about")}>About</button>
          <button className="item" style={getActiveTab("stats")} onClick={() => handleTab("stats")}>Base Stats</button>
          <button className="item" style={getActiveTab("evolution")} onClick={() => handleTab("evolution")}>Evolution</button>
        </div>
        <div className="tabBody" style={tabs.about}>
          <table>
            <tbody>
              <tr>
                <td>Species</td>
                <td>{info.specie}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{info.height}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{info.weight}</td>
              </tr>
              <tr>
                <td>Abilities</td>
                <td style={{ textTransform: "capitalize" }}>{info.abilities.join(', ')}</td>
              </tr>
            </tbody>
          </table>
          <h4>Breeding</h4>
          <table>
            <tbody>
              <tr>
                <td>Egg Groups</td>
                <td style={{ textTransform: "capitalize" }}>{info.egg_groups.join(', ')}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tabBody" style={tabs.stats}>
          <table>
            <tbody>
              {info.stats.map(stat => (
                <tr>
                  <td style={{ textTransform: "capitalize" }}>{stat.stat.name.split("-").join(" ")}</td>
                  <td>{stat.base_stat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="tabBody" style={tabs.evolution}>
          
        </div>
      </div>
    </div>
  );
}
