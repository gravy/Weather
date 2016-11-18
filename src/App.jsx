import React from 'react';
import Nav from 'Nav';
//import './App.css';

let App = ({children}) => {
  return (
    <div className="App">
      <Nav/>
      <h2>Main Component</h2>
      {children}
    </div>
  );
};

export default App;
