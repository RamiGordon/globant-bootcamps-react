import React, { Component } from 'react';

import './App.css';

// importo componentes
import Car from "./components/Car";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Car model="toyota" marca="asdhe" color="red" patente="gdd 095"/>
        </header>
      </div>
    );
  }
}

export default App;
