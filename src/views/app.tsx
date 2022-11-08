import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './home';
import NoMatch from './no_match';
import ReactGA from 'react-ga';

class App extends Component {
    setGA = () => {
        ReactGA.initialize('UA-110182129-1');
        ReactGA.pageview('Init page view');
    };
    
    componentDidMount() {
        this.setGA();
    };

    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        )
    }
}

export default App;
