import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Airplane from './Airplane';
import Helicopter from './Helicopter';

class App extends Component {
  render() {
    let b747 = new Airplane('Boeing', '747', '525', '33000');
    let ec145 = new Helicopter('Eurocopter', 'EC145', '420', '15000');
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <p>
            {b747.showPlane()}
          </p>
          <p>
            {ec145.showPlane()}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
