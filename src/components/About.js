import React, { Component } from 'react';

class About extends Component {
    changeName(event){
        this.props.changeFirstName(event.target.value);
    }
    render() {
        return (
            <div>
                <h1>Play With The Second Reducer</h1>
                <h3>{this.props.firstName}</h3>
                <input type="text" onKeyUp={(event) => this.changeName(event)}/>
            </div>
        );
    }
}

export default About;
