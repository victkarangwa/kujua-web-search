import { Route, Switch } from 'react-router'
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/container/SearchContainer.jsx";
import './styles/App.css'

const App = () => {
    return (
        <Route exact path='/homepage' component={HomePage} />
    );
};

export default App;
