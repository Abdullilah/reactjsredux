import React, { Component } from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>Header</h1>
            <h2>{props.data.name}</h2>
            <ul>
                {props.data.arr.map( (ele, i) => <li key={i}>{ele}</li>)}
            </ul>
            <h2>{props.children}</h2>
        </div>
    );
}

export default Header;
