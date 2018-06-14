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

// function isSearched(searchTerm) {
//   return function(item) {
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   }
// }
const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  // Called when component initialised
  constructor(props) {
    // Sets this.props in constructor
    super(props);
    // Set initial state 
    this.state = {
      list,
      welcome,
      answer,
      searchTerm: '',       
    };

    // bind this method to constructor
    // Class method dont automatically bind this to class instance
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  // Business logic should be outside constructor
  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !==id;
    
    const updatedList = this.state.list.filter(isNotId);

    // update state
    this.setState({ list: updatedList });
  }

  render() {  
    const { welcome, answer, searchTerm, list } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My React Page</h1>
        </header>

        <h2>{welcome}</h2>
        <p>The answer to everything is {answer}</p>
        
        <Search 
          value={searchTerm}
          onChange={this.onSearchChange}
        />

        <Table 
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

class Search extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <form>
        <input type="text" value={value} 
        onChange={onChange} />
      </form>
    )
  }
}

class Table extends Component {
  render() {
    const { list, pattern, onDismiss } = this.props;
    return (
      <div>
        <h3>The list:</h3>
        {list.filter(isSearched(pattern)).map(item => 
          <div key={item.objectID}>
            <span><a href={item.url}>{item.title}</a> </span>
            <span>Author: {item.author} </span>
            <span>Comments: {item.num_comments} </span>
            <span>Points: {item.points} </span>
            <span>
              <button onClick={() => onDismiss(item.objectID)} type="button">Dismiss</button>
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default App;
