import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodoComplete, removeTodo }) => {
    return (
        <ul>
            {
                todos.map(todo => <TodoItem 
                    key={todo.id} 
                    removeTodo={removeTodo}
                    toggleTodoComplete={toggleTodoComplete}
                    {...todo}/>)
            }
        </ul>
    )
}

export default TodoList
//для тех todos, что к нам пришли мы будем делать map(), 
//и для одного todo мы будем вызывать <TodoItem /> и передавать key
//и через спред оператор передавать весть todo