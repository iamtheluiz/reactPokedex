import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Index from './pages/Index';
import NotFound from './pages/NotFound';

// Export Routes
export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}