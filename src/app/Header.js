import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super();
        this.state = {
            newName: props.initialName
        }
    }

    changeValue(){
        this.props.changeValue(this.state.newName);
    }

    onchangeTextInputValue(event){
        this.setState({
            newName: event.target.value
        });
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
                <input type="text" onChange={(event) => this.onchangeTextInputValue(event)}/>
            </div>
        );
    }
}

export default Header;