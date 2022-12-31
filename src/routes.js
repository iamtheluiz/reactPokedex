import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './timelines'

// Pages
import Index from './pages/Index';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';
import NotFound from './pages/NotFound';

// Export Routes
export default function Routes() {
  return(
    <BrowserRouter basename="/reactPokedex">
      <Route render={({ location }) => {
        const { pathname, key } = location;

        return (
          <TransitionGroup component={null}>
            <Transition
              key={key}
              appear={true}
              onEnter={(node, appears) => play(pathname, node, appears)}
              onExit={(node, appears) => exit(node, appears)}
              timeout={{enter: 750, exit: 150}}
            >
              <Switch location={location}>
                <Route path="/" exact component={Index} />
                <Route path="/:name" component={Pokedex} />
                <Route path="/pokemon" component={Pokemon} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Transition>
          </TransitionGroup>
        )
      }}/>
    </BrowserRouter>
  );
}