import React, { Component } from 'react';
import Nav from './components/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
}

export default App;
