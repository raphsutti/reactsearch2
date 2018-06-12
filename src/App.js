import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Create mock API array
const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

// Test const
const welcome = 'Welcome to the Road to learn React practice by Raph Sutti 2018';
const answer = 42;

class App extends Component {
  // Called when component initialised
  constructor(props) {
    // Sets this.props in constructor
    super(props);
    // Set initial state (can be accessed in whole component)
    this.state = {
      list,
      welcome,
      answer,
    };
  }

  render() {  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My React Page</h1>
          {console.log('Hi')}
        </header>

        <h2>{this.state.welcome}</h2>
        <p>The answer to everything is {this.state.answer}</p>
        
        <h3>The list:</h3>
        {this.state.list.map(item => 
            <div key={item.objectID}>
              <span><a href={item.url}>{item.title}</a> </span>
              <span>Author: {item.author} </span>
              <span>Comments: {item.num_comments} </span>
              <span>Points: {item.points} </span>
            </div>
        )}
      </div>
    );
  }
}

export default App;
