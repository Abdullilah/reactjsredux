import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
        super();
        this.state = {
            age : props.age,
        }
    }

    increaseAge(){
        this.setState({
            age : this.state.age + 3
        })
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>This is {this.props.name}</p>
                <p>This is {this.state.age}</p>
                <button className="btn btn-primary" onClick={this.increaseAge.bind(this)}>
                    Increase Age
                </button>
                <h1>{this.props.newName}</h1>
            </div>
        );
    }
}

export default Home;
