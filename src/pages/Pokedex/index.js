import React, { Component } from 'react';

/* Components */
import Header from '../../components/Header';

/* API */
import api from '../../services/api';

/* Styles */
import './styles.css';

export default class Pokedex extends Component{
    state = {
        pokedexList: []
    }

    async componentDidMount(){
        const response = await api.get('https://pokeapi.co/api/v2/pokedex/');
        const allPokedex = response.data.results;
        const pokedexReturn = [];

        allPokedex.forEach(pokedex => {
            pokedexReturn.push({
                key: pokedex.name,
                name: this.capitalize(pokedex.name)
            });

            this.setState({
                pokedexList: pokedexReturn
            });
        });

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

    render(){
        return(
            <>
                <Header />
                <div className="pokedexList">
                    {this.state.pokedexList.map(pokedex => (
                        <div key={pokedex.key} className="link">
                            <a href={`/pokemons/${pokedex.key}`}>{pokedex.name}</a>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}