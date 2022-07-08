import React from 'react'

const ImputField = (text, setText, addTodo) => {
    return (
        <label>
            <input placeholder="Ввод TODO" value={text} onChange={(e) => setText(e.target.value)}></input>
            <button className="btn btn-outline-success" onClick={(addTodo)}>Add</button>
        </label>
    )
}

export default ImputField
