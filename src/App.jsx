import React from 'react';
import Nav from 'Nav';
//require('!style!css!./css/App.css');

let App = ({children}) => {
  return (
    <div className="App">
      <Nav/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {children}
        </div>
      </div>
    </div>
  );
};

export default App;
