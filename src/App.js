import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Feed from './components/Feed'
import Services from './components/Services'
import Navbar from './components/Navbar'
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/" exact={true} component={Feed}/>
                <Route path="/services" component={Services}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
