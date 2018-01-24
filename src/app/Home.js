import React, { Component } from 'react';

class Home extends Component {
    render() {

        return (
            <div>
                <h1>Home</h1>
                <p>This is {this.props.name}</p>
                <p>This is {this.props.age}</p>
            </div>
        );
    }
}

export default Home;
