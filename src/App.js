import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const helloWorld = 'Welcome to the Road to learn React practice by Raph Sutti';
    const answer = 42;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <h2>{helloWorld}</h2>
          <p>The answer to everything is {answer}</p>
      </div>
    );
  }
}

export default App;
