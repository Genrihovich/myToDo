import React, { Component } from 'react'
import Todo from './SignUpForm/Todo';
import SignUpForm from './SignUpForm/SignUpForm';

class Gritting extends Component {//якщо юзер увійшов то грузимо тудушку, якщо ні то ввод
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
    }
    render() {
        console.log('Gritting - ' + this.state.isLoggedIn);
        if (this.state.isLoggedIn) {
            return <Todo />
        }
        return <SignUpForm isLoggedIn={this.state.isLoggedIn} />

    }

}
// const isLoggedIn = props.isLoggedIn;
// console.log(isLoggedIn);



export default Gritting
