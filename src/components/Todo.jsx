import React from 'react'
import '../styles/Todo.css'
import { connect } from 'react-redux'
import { toggleCompleted } from '../redux/actions'

function Todo({ id, text, completed, toggleCompleted }) {
    return (
        <li>
            <span className={completed ? 'completed' : ''}>{text}</span>
            <input type='checkbox' checked={completed} onChange={() => toggleCompleted(id)} />
        </li>
    )
}

// mapStateToProps is null because we don't need any todo information from the store - that is being passed down as props from TodosList already for each Todo.

const mapDispatchToProps = dispatch => {
    return {
        toggleCompleted: id => {
            dispatch(
                toggleCompleted(id)
            )
        }
    }
}

export default connect(null, mapDispatchToProps)(Todo)
