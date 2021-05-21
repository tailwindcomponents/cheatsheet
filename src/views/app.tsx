import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './home';
import NoMatch from './no_match';

const App = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="*">
            <NoMatch />
        </Route>
    </Switch>
);

export default App;
