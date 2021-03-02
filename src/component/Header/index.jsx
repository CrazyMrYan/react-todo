import React, { Component } from 'react';
import './index.css'

export default class Header extends Component {
    // add todo 方法 
    addTodo = ( event ) => {
        const { keyCode, target } = event
        const { addNewTodo } = this.props
        if( keyCode !== 13) return
        if(target.value.trim() === '' ) {
            alert('输入🈲️空')
            return
        }
        // 调用 app component 的方法
        addNewTodo( target.value )
        target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp= { this.addTodo } placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        );
    }
}