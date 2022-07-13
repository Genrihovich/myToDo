import React, { Component } from 'react'
import './SignUpForm.css'

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            maxLength: 6,
            placeholder: 'Введіть нікнейм'
        }
        this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
    }

    onNameChangeHandler(e) {
        this.setState({
            userName: e.target.value
        })

    }
    render() {
        return (
            <div className="wrapper">
                <input
                    type="text"
                    placeholder={this.state.placeholder}
                    value={this.state.userName}
                    onChange={this.onNameChangeHandler}
                    //  onKeyPress={(e) => keyPress(e)}
                    maxLength={this.state.maxLength}
                />
                <label
                    className='tiptop'>
                    Довжина має бути не більше {this.state.maxLength} : {this.state.maxLength}/{this.state.userName.length}
                </label>
            </div>
        )
    }

}

export default SignUpForm
