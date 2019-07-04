import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* Page */
import Main from './pages/Main';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
