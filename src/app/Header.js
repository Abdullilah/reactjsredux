import React, { Component } from 'react';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            newName: 'Anna'
        }
    }

    changeValue(){
        this.props.changeValue(this.state.newName);
    }

    render() {
        return (
            <div>
                <h1>Header</h1>
                <h2>{this.props.data.name}</h2>
                <ul>
                    {this.props.data.arr.map( (ele, i) => <li key={i}>{ele}</li>)}
                </ul>
                <h2>{this.props.children}</h2>
                <button className="btn btn-danger" onClick={this.changeValue.bind(this)}>
                    Change the parent value
                </button>
            </div>
        );
    }
}

export default Header;