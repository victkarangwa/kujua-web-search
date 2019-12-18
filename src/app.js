import React from 'react';
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Homepage from './components/Homepage'
import './styles/App.css'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Homepage} />
            </Switch>
        </Router>

    );
};

export default App;
