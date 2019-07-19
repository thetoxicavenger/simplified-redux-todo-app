import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

class AddTodo extends Component {
    state = {
        text: ''
    }
    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state.text)
        this.setState({
            text: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <li>
                    <input type="text" value={this.state.text} onChange={this.handleChange} placeholder="Add New Todo..." />
                </li>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: text => {
            dispatch(
                addTodo(text)
            )
        }
    }
}

// // before connect
// this.props = {}
// this.state = {
//     text: ''
// }

// // after connect
// this.props = {
//     ...this.props,
//     addTodo: text => {
//         dispatch(
//             addTodo(text)
//         )
//     }
// }

// what does connect actually do? It's a higher order component that gives any component more props. Those just happen to be from redux.

// function connect(mapStateToProps, mapDispatchToProps) {
//     return function(Comp) {
//         return <Comp {...mapStateToProps} {...mapDispatchToProps} />
//     }
// }

export default connect(null, mapDispatchToProps)(AddTodo)
