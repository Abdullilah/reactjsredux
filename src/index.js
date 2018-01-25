// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import {createStore} from 'redux';

const reducer = (state, action) => {
    switch (action.type){
        case "ADD":
            state += action.payload;
            break;
        case "Sub":
            state -= action.payload;
            break;
    }
    return state;
}

const store = createStore(reducer, 0);

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