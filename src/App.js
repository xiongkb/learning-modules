import React, { useState, Component } from 'react';
import './App.css';
import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";

class App extends Component {

  state = {
    username: "Rubdub"
  }

  userInputChangeHandler = (e) => {
    this.setState({username: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, Enter your name</h1>
        <UserInput changed={this.userInputChangeHandler} name={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="Rub"/>
        <UserOutput userName="Tub"/>
      </div>
    );
  }

}

export default App;


