import React, { Component } from 'react'
import './App.css'
// header component
import Header from './component/Header'
// list component
import List from './component/List'
// footer component
import Footer from './component/Footer'
// unique identification 
import { nanoid } from 'nanoid'


export default class App extends Component {
    state = {
        // todo 初始状态
        todos:[
            { id: nanoid(), label: '吃饭', done: false },
            { id: nanoid(), label: '睡觉', done: true },
            { id: nanoid(), label: '打豆豆', done: false },
        ]
    }
    // 暴露给子组件调用的 addNewTodo 方法
    addNewTodo = value => {
        const { todos } = this.state
        const newItem = { id: nanoid(), label: value, done: false }
        this.setState( { todos: [ newItem, ...todos ] } )
    }
    // 暴露给 Item component 的 updateTodo 方法
    updateTodo = ( id, done ) =>{
        const { todos } = this.state
        const updataTodos = todos.map( item => {
            if( item.id === id ) return { ...item, done }
            else return item
        })
        this.setState( { todos: updataTodos } )
    }
    // 暴露给 Item component 的 deleteTodo 方法
    deleteTodo = id =>{
        const { todos } = this.state
        if(window.confirm('Are you sure about deleting it?')) 
        this.setState( { todos: todos.filter( item => id !== item.id ) } )
    }
    // footer component 全选 or 反选
    checkedAll = done => {
        const { todos } = this.state
        this.setState( { todos: todos.map( item => { return { ...item, done } } ) } )
    }
    // footer component 删除已完成方法
    clearAllDone = () => {
        const { todos } = this.state
        this.setState( { todos: todos.filter( item => !item.done ) } )
    }
    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <h2>ToDo-List （ ReactStudy ）</h2>
                    <Header addNewTodo= { this.addNewTodo } />
                    <List todos= { todos } deleteTodo= { this.deleteTodo } updateTodo= { this.updateTodo } />
                    <Footer todos= { todos } clearAllDone= { this.clearAllDone } checkedAll= { this.checkedAll } />
                </div>
            </div>
        )
    }
}