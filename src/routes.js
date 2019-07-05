import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* Page */
import PokemonList from './pages/PokemonList';
import PokemonInfo from './pages/PokemonInfo';
import Pokedex from './pages/Pokedex';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Pokedex}></Route>
            <Route path="/pokemon/:id" exact component={PokemonInfo}></Route>
            <Route path="/pokemons/:pokedexName" exact component={PokemonList}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
