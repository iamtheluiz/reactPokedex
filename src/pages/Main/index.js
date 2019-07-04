import React, { Component } from 'react';

/* Components */
import Header from '../../components/Header';
import PokemonList from '../../components/PokemonList';

class Main extends Component{
  render(){
    return (
        <>
            <Header />
            <PokemonList />
        </>
    );
  }
}

export default Main;
