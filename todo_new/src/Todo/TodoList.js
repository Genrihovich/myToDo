import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = ({ todos, toggleTodoComplete, removeTodo }) => {
    return (
        <ul>
            {
                todos.map(todo => <TodoItem
                    key={todo.id}
                    removeTodo={removeTodo}
                    toggleTodoComplete={toggleTodoComplete}
                    {...todo} />)
            }
        </ul>
    )
}

export default TodoList
