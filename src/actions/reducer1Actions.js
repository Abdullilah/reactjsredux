export function addDate(newDate) {
    return{
        type: 'ADD_DATE',
        payload: newDate
    }
}

export function deleteDate(id) {
    return{
        type: 'DELETE_DATE',
        payload: id
    }
}

export function deleteAllDate() {
    return{
        type: 'DELETE_ALL'
    }
}