// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import {createStore, combineReducers} from 'redux';

const initislState1 = {
    result : 0,
    arrAdd: [],
    arrSub: []
};

const initislState2 = {
    firstName: '',
    secondName: ''
};

const reducer1 = (state = initislState1, action) => {
    switch (action.type){
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                arrAdd: [...state.arrAdd, action.payload]
            }
            break;
        case "Sub":
            state = {
                ...state,
                result: state.result - action.payload,
                arrSub: [...state.arrSub, action.payload]
            }
            break;
    }
    return state;
}



const reducer2 = (state = initislState2, action) => {
    switch (action.type){
        case "SET_NAME":
            state = {
                ...state,
                firstName: action.payload
            }
            break;
        case "SET_SURNAME":
            state = {
                ...state,
                secondName: action.payload
            }
            break;
    }
    return state;
}

const reducer = combineReducers({reducer1, reducer2});

const store = createStore(reducer);

store.subscribe(()=> {
    console.log(store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 10
});

store.dispatch({
    type: "ADD",
    payload: 5
});

store.dispatch({
    type: "Sub",
    payload: 10
});

store.dispatch({
    type: "SET_NAME",
    payload: 'Fadi'
});

store.dispatch({
    type: "SET_SURNAME",
    payload: 'Horani'
});