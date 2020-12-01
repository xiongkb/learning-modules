import React, { useState, Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      {name: "Eric", food: "cheesecake"},
      {name: "Coco", food: "bread"},
      {name: "Vanilla", food: "dairy"},
    ]
  }

  switchDesertHandler = () => {
    console.log("Was clicked")
  }

  render() {
    return (
      <div className="App">
        <h1>Favorite Desert</h1>
        <button onClick={this.switchDesertHandler}>Switch Desert</button>
        <Person name={this.state.persons[0].name} food={this.state.persons[0].food} > He likes pizza.</Person>
        <Person name={this.state.persons[1].name} food={this.state.persons[1].name} />
        <Person name={this.state.persons[2].name} food={this.state.persons[2].name} />
      </div>
    );
  }

}

export default App;


