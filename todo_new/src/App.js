import SignUpForm from './SignUpForm/SignUpForm';
import Todo from './Todo/Todo';
import './App.css';
import React from 'react'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      isLoggedIn: false,
    }
    this.LoggedInOnClickHandler = this.LoggedInOnClickHandler.bind(this)
  }

  LoggedInOnClickHandler(valueIsLogged, user) {
    this.setState({ isLoggedIn: valueIsLogged })
    this.setState({ userName: user })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let componentShow;
    if (isLoggedIn) {
      componentShow =
        <Todo
          userName={this.state.userName}
          SignOutOnClickHandler={this.LoggedInOnClickHandler}
        />
    } else {
      componentShow =
        <SignUpForm
          addUserOnClickHandler={this.LoggedInOnClickHandler}
        />
    }

    return (
      <div className="App" >
        {componentShow}
      </div >
    );
  }

}

export default App;
