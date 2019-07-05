import React, { Component } from 'react';

/* Components */
import Header from '../../components/Header';

/* API */
import api from '../../services/api';

/* Style */
import './styles.css';

export default class PokemonInfo extends Component{
    state = {
        pokemonInfo: {}
    }

    componentDidMount(){
        this.loadPokemonInfo();
    }

    loadPokemonInfo = async () => {
        const response = await api.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`);
        const { name, sprites: {front_default} } = response.data;

        this.setState({
            pokemonInfo: {
                name,
                front_default
            }
        });
    }

    render(){
        return(
            <>
                <Header />
                <div id="pokemonInfo">
                    <div className="basicInfo">
                        <img src={this.state.pokemonInfo.front_default} alt={this.state.pokemonInfo.name} />
                        <p>{this.state.pokemonInfo.name}</p>
                    </div>
                </div>
            </>
        );
    }
}