import React, { Component } from 'react';
import './index.css'
// 引入 props-types
import PropTypes from 'prop-types'
// 引入 Item component
import Item from '../Item'

export default class List extends Component {
    // 限制 props 类型
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired
    }
    render() {
        const { todos, updateTodo, deleteTodo } = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map( data => <Item updateTodo={ updateTodo } deleteTodo= { deleteTodo } key= { data.id } {...data} />)
                }
            </ul>
        );
    }
}