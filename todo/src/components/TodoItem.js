import React from 'react'

const TodoItem = ({ id, text, completed, toggleTodoComplete, removeTodo }) => {
    return (
        <li key={id}>
            <input
                className="form-check-input"
                type="checkbox"
                checked={completed}
                onChange={() => { toggleTodoComplete(id) }} />
            <span>{text}</span>
            {/*  <span style={{ textDecoration: todo.complited ? "line-through" : "" }}>{todo.text}</span> */}
            <span
                className='delete'
                onClick={() => removeTodo(id)}>&times; {/* спец символ */}
            </span>

        </li>
    )
}

export default TodoItem
