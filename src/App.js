import React, { Component } from 'react';
import Header from './app/Header';
import Home from './app/Home';

class App extends Component {
  render() {
      let myData = {
          name : 'My Nav Bar',
          arr : ['Home', 'About', 'Log in']
      }
    return (
      <div>
        <div className="header">
            <Header data={myData}>
                <div>This is a child inside the Header Tag</div>
            </Header>
        </div>
        <div className="container home">
          <div className="row">
            <div className="col-sm-12">
              <Home name={"Max"} age={26}/>
              <Home name={"Jon"} age={22}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
