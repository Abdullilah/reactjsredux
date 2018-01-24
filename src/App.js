import React, { Component } from 'react';
import Header from './app/Header';
import Home from './app/Home';

class App extends Component {

    constructor(){
        super();
        this.state = {
            myData : {
                name : 'My Nav Bar',
                arr : ['Home', 'About', 'Log in']
            },
            myVal : 'Sami'
        }
    }

    changeParentValue(name){
        this.setState({
            myVal : name
        });
    }

      render() {
        return (
          <div>
              <div className="header">
                  <Header data={this.state.myData} changeValue={this.changeParentValue.bind(this)}>
                      <div>This is a child inside the Header Tag</div>
                  </Header>
              </div>
              <div className="container home">
                  <div className="row">
                      <div className="col-sm-12">
                          <Home name={"Max"} age={26} newName={this.state.myVal}/>
                          <Home name={"Jon"} age={22} newName={this.state.myVal}/>
                      </div>
                  </div>
              </div>
          </div>
        );
      }
}

export default App;
