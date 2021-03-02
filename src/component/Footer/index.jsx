import React, { Component } from 'react';
import './index.css'

export default class Footer extends Component {
    handleChecked = () => {
        
    }
    render() {
        const { todos, checkedAll, clearAllDone } = this.props
        const doneNumber = todos.filter( item => item.done !== false ).length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange= { event => checkedAll(event.target.checked) } checked= { doneNumber === todos.length && todos.length !== 0 ? true : false} />
                </label>
                <span>
                    <span>已完成 { doneNumber } </span> / 全部 { todos.length }
                </span>
                <button onClick= { event => { clearAllDone() } } className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}