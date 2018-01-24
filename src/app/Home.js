import React, { Component } from 'react';

class Home extends Component {
    render() {
        let x = 'Hello';
        if(true){
            x += ' Max';
        }
        return (
            <div>
                <h1>Home</h1>
                {x}
                <br/>
                {2 + 5}
            </div>
        );
    }
}

export default Home;
