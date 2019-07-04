import React, { Component } from 'react';
// import { Refresh } from 'styled-icons/material/Refresh';
import { Search } from 'styled-icons/material/Search';

/* API Import */
import api from '../../services/api';

/* Style */
import './styles.css';

export default class PokemonList extends Component{
    state = {
        pokemons: [],
        show: [],
        filter: ""
    }

    componentDidMount(){
        this.loadPokemons();
    }

    loadPokemons = async () => {
        if(this.state.pokemons.length === 0){
            let response = [];
            let poke = [];
            
            response = await api.get('https://pokeapi.co/api/v2/pokedex/2');

            const { data: { pokemon_entries } } = response;

            // Get more information about each pokemon
            pokemon_entries.forEach(async (pokemon) => {
                const { entry_number, pokemon_species: { name } } = pokemon;

                const response = await api.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

                const { sprites: { front_default }, id} = response.data;

                poke.push({
                    id: entry_number,
                    poke_id: id,
                    name,
                    img: front_default
                });

                this.setState({
                    pokemons: poke.sort(this.dynamicSort("id")),
                    show: poke.sort(this.dynamicSort("id")),
                    filter: ""
                });
            });
        }else{

        }
    }

    dynamicSort = (property) => {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    filter = () => {
        var pokemonName = document.getElementById("pokemonName").value;
        
        this.setState({
            pokemons: this.state.pokemons,
            show: this.state.pokemons.filter((pokemon) => {
                return pokemon.name.indexOf(pokemonName) !== -1;
            }),
            filter: pokemonName
        })
    }

    render(){
        return(
            <div className="pokeContainer">
                <div className="pokeForm">
                    <input id="pokemonName" onChange={this.filter} />
                    <button>
                        <Search className="icon" />
                    </button>
                </div>
                {this.state.show.map(pokemon => (
                    <a href={`/pokemon/${pokemon.poke_id}`} key={pokemon.id} className="pokeItem">
                        <img src={pokemon.img} alt={pokemon.name} />
                        <p>{pokemon.name}</p>
                    </a>
                ))}
                {/* <a href="#!" className="updatePokemons"onClick={this.loadPokemons}>
                    <Refresh className="icon" />
                </a> */}
            </div>
        );
    }
}
