import React from 'react';
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router, Link } from "react-router-dom";
import store from './redux/store/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Homepage from './components/Homepage'
import Results from './components/Results';
import './styles/App.css'

const App = () => {
    return (
        <Provider store={store}>
                <Router>
            <Switch>
                <Route path="/search" component={Results} />
                <Route path="/" component={Homepage} />
            </Switch>
        </Router>    
        </Provider>


    );
};

export default App;
