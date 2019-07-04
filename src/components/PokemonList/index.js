import React, { Component } from 'react';

/* API Import */
import api from '../../services/api';

/* Style */
import './styles.css';

export default class PokemonList extends Component{
    state = {
        pokemons: [],
        nextPage: "",
        prevPage: "",
        pokemonCout: 0,
    }

    componentDidMount(){
        this.loadPokemons();
    }

    loadPokemons = async () => {
        const response = await api.get('https://pokeapi.co/api/v2/pokemon/');
        const { data: { results, next, previous, count } } = response;

        let poke = [];

        // Get more information about each pokemon
        results.forEach(async (pokemon) => {
            const response = await api.get(pokemon.url);

            const { data: { id, name, sprites: { front_default }}} = response;

            poke.push({
                id,
                name,
                img: front_default
            });

            this.setState({
                pokemons: poke.sort(this.dynamicSort("id")),
                nextPage: next,
                prevPage: previous,
                pokemonCout: count
            });
        });
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

    render(){
        return(
            <div className="pokeContainer">
                {this.state.pokemons.map(pokemon => (
                    <div key={pokemon.id} className="pokeItem">
                        <img src={pokemon.img} alt={pokemon.name} />
                        <p>{pokemon.name}</p>
                    </div>
                ))}
            </div>
        );
    }
}
