import React from 'react'
import './TodoForm.css';
import LogOutUser from './LogOutUser';
import InputField from './InputField';

class TodoForm extends React.Component {


    render() {
        const userName = this.props.userName;
        return (
            <div>
                <LogOutUser
                    userName={userName}
                    SignOutOnClickHandler={this.props.SignOutOnClickHandler}
                />
                <InputField
                    userName={userName}
                />
                {/* <Input id="text"
                    type="text"
                    placeholder="Ввод TODO"
                    onChange={this.onNameChangeHandler}
                    onKeyPress={this.handleKeyPress}
                /> */}
                {/* <p>State of Component</p>
                <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
            </div>
        )
    }
}

export default TodoForm


