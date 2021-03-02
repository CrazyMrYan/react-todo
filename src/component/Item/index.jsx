import React, { Component } from 'react';
import './index.css'
// 引入 props-types
import PropTypes from 'prop-types'

export default class Item extends Component {
    state = {
        // 定义移入移出状态
        mouse: false
    }
    // 限制 props 类型
    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }
    // 鼠标移入移出方法
    handleMouse = state => {
        return () => {
            this.setState({ mouse: state })
        }
    }
    render() {
        const { label, done, id, deleteTodo, updateTodo } = this.props
        const { mouse } = this.state
        return (
            <li style={{ backgroundColor: mouse ? '#efefef' : 'white' }} onMouseLeave={ this.handleMouse(false) } onMouseEnter= {this.handleMouse(true)} >
                <label>
                    <input type="checkbox" onChange={event => updateTodo(id, event.target.checked) } checked= {done} />
                    <span> { label } </span>
                </label>
                <button className="btn btn-danger" onClick={() => deleteTodo(id)} style={{ display: mouse ? 'block' : 'none' }} >删除</button>
            </li>
        );
    }
}