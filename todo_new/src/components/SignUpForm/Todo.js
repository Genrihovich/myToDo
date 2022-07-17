import React, { Component } from 'react'
import Input from './Input'

class Todo extends Component {
    render() {
        return (
            <div>
                <Input id="text"
                    type="text"
                    placeholder="Ввод TODO"
                    onChange={this.onNameChangeHandler}
                    onKeyPress={this.handleKeyPress}
                />
            </div>
        )
    }
}

export default Todo


