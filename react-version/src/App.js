import React, { Component } from 'react';
import Conversor from './components/Conversor.component';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Conversor de moedas com React.js</h2>
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      </div>
    );
  }
}

export default App;
