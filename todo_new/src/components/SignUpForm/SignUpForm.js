import React, { Component } from 'react'
import './SignUpForm.css'
import Input from './Input';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
        }
        this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    onNameChangeHandler(e) {
        this.setState({ userName: e.target.value })
    }
    handleKeyPress(e) {
        if (e.key === 'Enter') {
            console.log('enter');
        }
    }

    render() {
        const userName = this.state.userName;
        const maxLength = 6;
        const error = 'Довжина має бути не більше: ' + maxLength + ' [' + maxLength + '/' + userName.length + ']';

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

                </div>
                <p>State of Component</p>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </>

        )
    }
}
//Implemented the Input component
export default SignUpForm
