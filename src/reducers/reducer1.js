const initislState1 = {
    result : 0,
    arrAdd: [],
    arrSub: []
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

export default reducer1;