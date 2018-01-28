import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import * as dateActions from "../actions/reducer1Actions";
import Home from "../components/Home";

class App extends Component {

    render() {
        return (
            <Home
                r1={this.props.r1}
                addDate={this.props.addDate.bind(this)}
                deleteDate={this.props.deleteDate.bind(this)}
                deleteAllDate={this.props.deleteAllDate.bind(this)}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        r1: state.reducer1
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addDate: (newDate) => {
            dispatch(dateActions.addDate(newDate))
        },
        deleteDate: (id) => {
            dispatch(dateActions.deleteDate(id))
        },
        deleteAllDate: () => {
            dispatch(dateActions.deleteAllDate())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);