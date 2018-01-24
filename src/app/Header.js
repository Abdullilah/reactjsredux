import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <h2>{this.props.data.name}</h2>
                <ul>
                    {this.props.data.arr.map( (ele, i) => <li key={i}>{ele}</li>)}
                </ul>
                <h2>{this.props.children}</h2>
            </div>
        );
    }
}

export default Header;
