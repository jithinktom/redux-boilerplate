import React, { Component } from 'react';
import Counter from './containers/Counter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Counter/>
        </div>
      </div>
    );
  }
}

export default App;
