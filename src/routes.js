import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Pokedex from './pages/Pokedex';

// Export Routes
export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/pokedex" component={Pokedex} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}