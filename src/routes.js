import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* Page */
import Main from './pages/Main';
import PokemonInfo from './pages/PokemonInfo';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}></Route>
            <Route path="/pokemon/:id" exact component={PokemonInfo}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
