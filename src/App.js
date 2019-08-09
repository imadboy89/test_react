import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from "./Pages/HomePage"
import About from "./Pages/AboutPage"
import Login from "./Pages/LoginPage"
import Artists from "./Pages/ArtistsPage"
import Songs from "./Pages/SongsPage"
import {AuthContext} from './libs/AuthContx';
import Auth from './libs/Auth';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.Auth = new Auth();

    // State also contains the updater function so it will
    // be passed down into the context provider
  }

  render() {
    return (
      <AuthContext.Provider value={this.Auth}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Login" component={Login} />
          <Route path="/Artists" component={Artists} />
          <Route path="/Songs" component={Songs} />
        </Switch>
      </AuthContext.Provider>
    )
  }
}

export default App;
