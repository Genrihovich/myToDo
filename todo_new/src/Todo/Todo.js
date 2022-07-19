import React from 'react'
import Input from '../components/Input'
import './Todo.css';
import Button from '../components/Button';

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.SignOutOnClickHandler = this.SignOutOnClickHandler.bind(this);
    }

    SignOutOnClickHandler() {
        this.props.SignOutOnClickHandler(false, '')
    }

    render() {
        const userName = this.props.userName;
        return (
            <div>
                <div className="wrapper">
                    <p>Привіт, {userName}!</p>
                    <Button
                        children="Вийти"
                        className="enter"
                        onClick={this.SignOutOnClickHandler}
                    />

                </div>

                <Input id="text"
                    type="text"
                    placeholder="Ввод TODO"
                    onChange={this.onNameChangeHandler}
                    onKeyPress={this.handleKeyPress}
                />
                {/* <p>State of Component</p>
                <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
            </div>
        )
    }
}

export default Todo


