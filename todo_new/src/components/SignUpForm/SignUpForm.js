import React, { Component } from 'react'
import './SignUpForm.css'
import Input from './Input';
import Button from './Button';


class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            users: JSON.parse(localStorage.getItem('Users')) || [],
            isLoggedIn: this.props.isLoggedIn,
        }
        this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.addUserOnClickHandler = this.addUserOnClickHandler.bind(this);

    }

    onNameChangeHandler(e) {
        this.setState({ userName: e.target.value })
    }
    addUserOnClickHandler() {
        if (!this.state.users.includes(this.state.userName)) {
            this.state.users.push(this.state.userName)
            localStorage.setItem('Users', JSON.stringify(this.state.users))

            this.setState({ isLoggedIn: true })

        }

    }
    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.addUserOnClickHandler()
        }
    }


    render() {
        const userName = this.state.userName;
        const maxLength = 6;
        const label = 'Нік має бути не більше ' + maxLength + 'символів';

        let isBtnDisabled = '';
        (userName.length !== 0) ? isBtnDisabled = '' : isBtnDisabled = 'disabled';


        return (
            <>
                <div className="wrapper">
                    <Input id="text"
                        type="text"
                        label={label}
                        placeholder="Введіть нікнейм"
                        maxLength={maxLength}
                        value={userName}
                        onChange={this.onNameChangeHandler}
                        onKeyPress={this.handleKeyPress}
                    />
                    <Button
                        children="Увійти"
                        className="enter"
                        onClick={this.addUserOnClickHandler}
                        disabled={isBtnDisabled}
                    />

                </div>
                {/* <p>State of Component</p>
                <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
            </>

        )
    }
}
//Implemented the Sign user
export default SignUpForm
