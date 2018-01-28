import {createStore, combineReducers} from 'redux';
import reducer1 from './reducers/reducer1';

const reducer = combineReducers({reducer1});

export default createStore(reducer);
