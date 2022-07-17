import React, { Component } from 'react'
import './SignUpForm.css'
import Input from './Input';
import Button from './Button';
import Gritting from '../Gritting';


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
        const error = 'Довжина має бути не більше: ' + maxLength + ' [' + maxLength + '/' + userName.length + ']';
        let isBtnDisabled = '';
        (userName.length !== 0) ? isBtnDisabled = '' : isBtnDisabled = 'disabled'

        const isLoggedIn = this.state.isLoggedIn;
        console.log('SignUpForm_props - ' + this.props.isLoggedIn);
        console.log('SignUpForm - ' + this.state.isLoggedIn);
        // console.log(is);
        if (isLoggedIn) {
            <Gritting isLoggedIn={isLoggedIn} />
            console.log('тута ' + isLoggedIn);
        }

        return (
            <>
                <div className="wrapper">
                    <Input id="text"
                        type="text"
                        label="Ввод ніка"
                        placeholder="Введіть нікнейм"
                        maxLength={maxLength}
                        error={error}
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
