import React, {Component} from 'react';
import {Route} from "react-router";

import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import Contacts from "./components/pages/Contacts";
import Projects from "./components/pages/Projects"

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/aboutme'} component={AboutMe}/>
            <Route exact path={'/contacts'} component={Contacts}/>
            <Route exact path={'/projects'} component={Projects}/>
        </div>
    );
  }
}

export default App;
