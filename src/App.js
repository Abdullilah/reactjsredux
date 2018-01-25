import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    increasing(){
        this.props.increase(10);
    }
      render() {
          return (
              <div>
                  <h2>{this.props.r1.result}</h2>
                  <button onClick={this.increasing.bind(this)}>Change Name</button>
              </div>
          );
      }
}

const mapStateToProps = (state) => {
    return {
        r1: state.reducer1,
        r2: state.reducer2
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increase: (newVal) => {
            dispatch({
                type: 'ADD',
                payload: newVal
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);