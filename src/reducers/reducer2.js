const initislState2 = {
    firstName: 'First Name',
    secondName: ''
};

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

export default reducer2;