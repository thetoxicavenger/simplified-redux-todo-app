import React from 'react'

import { connect } from 'react-redux'

import Todo from './Todo'
import AddTodo from './AddTodo'

function TodosList({ todos }) {
    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {todos.map(todo => {
                    return <Todo key={todo.id} {...todo} />
                })}
                <AddTodo />
            </ul>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

// no mapDispatchToProps because TodosList doesn't perform any actions to change the store state. Therefore, we put the second argument to connect as null.

export default connect(mapStateToProps, null)(TodosList)
