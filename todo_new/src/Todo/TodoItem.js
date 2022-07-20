import React from 'react'
import Input from '../components/Input';

const TodoItem = ({ id, textTodo, completed, toggleTodoComplete, removeTodo }) => {

    return (
        <li key={id} className="todo">
            <Input
                className="form-check-input"
                type="checkbox"
                checked={completed ? true : false}

                onChange={() => { toggleTodoComplete(id) }} />
            {/* <span>{textTodo}</span> */}
            <span style={{ textDecoration: completed ? "line-through" : "" }}>{textTodo}</span>
            <span
                className='delete'
                onClick={() => removeTodo(id)}>&times; {/* спец символ */}
            </span>
        </li>
    )
}

export default TodoItem
