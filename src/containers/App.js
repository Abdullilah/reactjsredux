import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from "../components/Home";
import About from "../components/About";

import * as mathOp from "../actions/reducer1Actions";
import { setName } from  "../actions/reducer2Actions";

class App extends Component {

    render() {
        return (
            <div>
                <Home result={this.props.r1.result}
                      changeValue={this.props.increase.bind(this)}/>
                <About firstName={this.props.r2.firstName}
                       changeFirstName={this.props.setName.bind(this)}/>
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
            dispatch(mathOp.increase(newVal))
        },
        decrease: (newVal) => {
            dispatch(mathOp.decrease(newVal))
        },
        setName: (firstName) => {
            dispatch(setName(firstName))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);