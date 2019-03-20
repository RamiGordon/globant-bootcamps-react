import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

// importo componentes
import ListCars from './components/ListCars';
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
                  <Link to="/vehicles">Cars</Link>
                </li>
            </ul>
          </div>
          
          <div className="App container">
            <div className="col">
              <Route exact path="/" component={Home}/>
              <Route path="/vehicles" component={ListCars} />
            </div>
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
