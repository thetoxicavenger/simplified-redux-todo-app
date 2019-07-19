export const toggleCompleted = id => {
    return {
        type: 'TOGGLE_COMPLETED',
        id
    }
}

let lastId = 2
function newId() {
    lastId++
    return lastId
}

export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        text,
        id: newId()
    }
}