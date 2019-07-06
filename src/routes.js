import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* Page */
import PokemonList from './pages/PokemonList';
import PokemonInfo from './pages/PokemonInfo';
import Pokedex from './pages/Pokedex';

/* Config */
import envConfig from './envConfig.js';

const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path={`${envConfig.serverPath}/`} exact component={Pokedex}></Route>
            <Route path={`${envConfig.serverPath}/pokemons/:pokedexName`} exact component={PokemonList}></Route>
            <Route path={`${envConfig.serverPath}/pokemon/:id`} exact component={PokemonInfo}></Route>
            <Route component={() => (<div>404 Not found </div>)} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
