import SignUpForm from './SignUpForm/SignUpForm';
import TodoForm from './Todo/TodoForm';
import './App.css';
import React from 'react'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: JSON.parse(localStorage.getItem('activeUser')) || '',
      isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
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
        <TodoForm
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
