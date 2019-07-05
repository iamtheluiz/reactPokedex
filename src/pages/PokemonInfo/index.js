import React, { Component } from 'react';

/* Components */
import Header from '../../components/Header';

/* API */
import api from '../../services/api';

/* Style */
import './styles.css';

export default class PokemonInfo extends Component{
    state = {
        pokemonInfo: {
            id: "",
            name: "",
            front_default: "",
            stats: [],
            types: [],
        }
    }

    capitalize = (text) => {
        if(text.indexOf('-') !== -1){
            var words = text.split('-');
            var capitalize = [];
            words.forEach(word => {
                capitalize.push(word.charAt(0).toUpperCase() + word.slice(1));
            });
            text = capitalize.join(" ");
        }else{
            text = text.charAt(0).toUpperCase() + text.slice(1);
        }
        return text;
    }

    componentDidMount(){
        this.loadPokemonInfo();
    }

    loadPokemonInfo = async () => {
        const response = await api.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}/`);

        const { id, name, sprites: { front_default }, stats, types } = response.data;

        var pokemonTypes = [];

        types.forEach(type => {
            pokemonTypes.push(this.capitalize(type.type.name));
        });

        this.setState({
            pokemonInfo: {
                id,
                name,
                front_default,
                stats: stats,
                types: pokemonTypes
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
                        <p>{this.state.pokemonInfo.name} - #{this.state.pokemonInfo.id}</p>
                        {this.state.pokemonInfo.types.map((type) => (
                            <span key={type} className={type.toLowerCase()}>{type}</span>
                        ))}
                    </div>
                    {this.state.pokemonInfo.stats.map((element) => (
                        <p key={element.stat.name}><b>{this.capitalize(element.stat.name)}</b> => {element.base_stat}</p>
                    ))}
                </div>
            </>
        );
    }
}