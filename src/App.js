import React, { useState, Component } from 'react';
import './App.css';
import Person from "./Person/Person"

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
        <Person />
      </div>
    );
  }

}

export default App;


