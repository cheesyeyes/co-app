import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tower from './Tower';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Tower amount="10" />
      </div>
    );
  }
}

export default App;
