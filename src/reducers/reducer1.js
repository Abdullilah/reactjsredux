import { ADD_DATE, DELETE_DATE, DELETE_ALL } from '../constants/constant';
import { bake_cookie, read_cookie} from 'sfcookies';

const reducer1 = (state = read_cookie('dates'), action) => {
    let myDates = null;
    switch (action.type){
        case ADD_DATE:
            myDates = {text: action.payload.text ,date: action.payload.date, id: Math.random()}
            state.push(myDates);
            bake_cookie('dates', state);
            return state;
            break;
        case DELETE_DATE:
            state = state.filter(val => val.id !== action.payload);
            bake_cookie('dates', state);
            return state;
            break;
        case DELETE_ALL:
            state = [];
            bake_cookie('dates', state);
            return state;
            break;
        default:
            return state;
    }
}

export default reducer1;