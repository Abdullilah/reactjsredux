import React, { Component } from 'react';
import Header from './app/Header';
import Home from './app/Home';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header/>
        </div>
        <div className="container home">
          <div className="row">
            <div className="col-sm-12">
              <Home/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
