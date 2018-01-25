export function increase(newVal) {
    return{
        type: 'ADD',
        payload: newVal
    }
}

export function decrease(newVal) {
    return{
        type: 'SUB',
        payload: newVal
    }
}
