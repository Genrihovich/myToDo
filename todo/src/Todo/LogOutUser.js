/**
|--------------------------------------------------
| Вихід з аккаунта
|--------------------------------------------------
*/
import React, { Component } from 'react'
import Button from '../components/Button';

class LogOutUser extends Component {
    constructor(props) {
        super(props)
        this.SignOutOnClickHandler = this.SignOutOnClickHandler.bind(this);
    }

    SignOutOnClickHandler() {
        this.props.SignOutOnClickHandler(false, '')
        localStorage.setItem('isLoggedIn', JSON.stringify(false))
    }

    render() {
        const userName = this.props.userName;
        return (
            <div className="wrapper_out">
                <p>Привіт, {userName}!</p>
                <Button
                    children="Вийти"
                    className="enter"
                    onClick={this.SignOutOnClickHandler}
                />

            </div>
        )
    }
}

export default LogOutUser
