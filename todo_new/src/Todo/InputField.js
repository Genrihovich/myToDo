import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import './InputField.css';

export class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            todos: JSON.parse(localStorage.getItem(this.props.userName)) || []
        }
        this.NewTodoChangeHandler = this.NewTodoChangeHandler.bind(this);
        this.AddNewTodoOnClickHandler = this.AddNewTodoOnClickHandler.bind(this);
    }
    NewTodoChangeHandler(e) {
        this.setState({ todo: e.target.value })
    }

    AddNewTodoOnClickHandler() {
        const userName = this.props.userName;
        const todo = this.state.todo;
        if (todo.trim().length) {
            this.state.todos.push(todo)
        }
        localStorage.setItem(userName, {
            todo
        })
    }

    render() {
        return (
            <div className='InputField'>
                <Input
                    id="text"
                    type="text"
                    className='todo-InputField'
                    label="Ввод Todo"
                    placeholder='Ввод нового Todo'
                    onChange={this.NewTodoChangeHandler}
                // onKeyPress={this.handleKeyPress}
                />
                <Button
                    className='btn-InputField'
                    children='Добавити'
                    onClick={this.AddNewTodoOnClickHandler}
                />
            </div>
        )
    }
}

export default InputField
