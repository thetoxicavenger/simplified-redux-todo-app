const initialState = {
    todos: [
        {
            id: 1,
            text: 'Brush Teeth',
            completed: true
        },
        {
            id: 2,
            text: 'Eat Breakfast',
            completed: false
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, {
                    id: action.id,
                    text: action.text,
                    completed: false
                }]
            }
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo
                })
            }
        default:
            return state;
    }
}

export default reducer