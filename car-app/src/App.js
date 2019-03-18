import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import ListCars from './components/ListCars';

// importo componentes
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="header">
            <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/ArrayCars">Cars</Link>
                </li>
            </ul>
          </div>
          
          <div className="App container">
            <div className="col">
              {/* no se como pasar props para car */}
              <Route exact path="/" component={Home}/>
              <Route path="/ArrayCars" component={ListCars} />
            </div>
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
