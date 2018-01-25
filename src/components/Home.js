import React, { Component } from 'react';

class Home extends Component {
    step = 1;
    increasing(){
        this.props.changeValue(this.step);
    }

    valueChanged(event){
        this.step = parseInt(event.target.value);
    }
    render() {
        return (
            <div>
                <h1>Play With The First Reducer</h1>
                <h3>{this.props.result}</h3>
                <button onClick={this.increasing.bind(this)}>Increase Value</button><br/>
                <input type="text" onChange={(event) => this.valueChanged(event)}/>
            </div>
        );
    }
}

export default Home;
