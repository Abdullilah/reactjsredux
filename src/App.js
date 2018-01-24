import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './app/Home';
import About from './app/About';
import Header from './app/Header';


class App extends Component {

      render() {
          return (
              <Router>
                  <div>
                      <Header/>
                      <Route exact path="/" component={Home}/>
                      <Route path="/home" component={Home}/>
                      <Route path="/about" component={About}/>
                  </div>
              </Router>
          );
      }
}

export default App;
