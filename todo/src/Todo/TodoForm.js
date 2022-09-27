import React from 'react'
import './TodoForm.css';
import LogOutUser from './LogOutUser';
import InputField from './InputField';
import TodoList from './TodoList';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            todos: JSON.parse(localStorage.getItem(this.props.userName)) || [],
            textTodo: ''
        })
        this.toggleTodoComplete = this.toggleTodoComplete.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.addNewTodoOnClickHandler = this.addNewTodoOnClickHandler.bind(this);
        this.newTodoChangeHandler = this.newTodoChangeHandler.bind(this);
    }
    newTodoChangeHandler(e) {
        this.setState({ textTodo: e.target.value })
    }

    addNewTodoOnClickHandler() {
        const userName = this.props.userName;
        const textTodo = this.state.textTodo;
        const todos = this.state.todos;

        if (textTodo.trim().length) {
            this.state.todos.push({
                id: new Date().toISOString(), // идентификатор
                textTodo,                         // сам текст
                completed: false, // статус завершенности (вначале дело еще не завершено)                  
            })
        }
        localStorage.setItem(userName, JSON.stringify(todos));

        this.setState({ textTodo: '' })


    }
    handleKeyPress(e) {
        const code = e.keyCode || e.which
        if (code === 13) { this.addNewTodoOnClickHandler() }
    }

    toggleTodoComplete(todoId) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id !== todoId) return todo;
                return {
                    ...todo,
                    completed: !todo.completed,
                }
            })
        })
    }

    removeTodo(todoId) {
        const newTodos = this.state.todos.filter(todo => todo.id !== todoId)
        this.setState({ todos: newTodos })
        localStorage.setItem(this.props.userName, JSON.stringify(newTodos));
    }

    render() {
        return (
            <div>
                <LogOutUser
                    userName={this.props.userName}
                    SignOutOnClickHandler={this.props.SignOutOnClickHandler}
                />
                <InputField
                    userName={this.props.userName}
                    textTodo={this.state.textTodo}
                    setText={this.newTodoChangeHandler}
                    addTodo={this.addNewTodoOnClickHandler}
                />
                <TodoList
                    todos={this.state.todos}
                    toggleTodoComplete={this.toggleTodoComplete}
                    removeTodo={this.removeTodo}
                />

                {/* <p>State of Component</p>
                <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
            </div>
        )
    }
}

export default TodoForm


