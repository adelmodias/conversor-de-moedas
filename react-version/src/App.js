import React, { Component } from 'react';
import Conversor from './components/Conversor.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      </div>
    );
  }
}

export default App;
