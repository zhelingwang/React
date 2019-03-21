import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>index</h1>
          <div><Link to="/about/">To about</Link></div>
          <div><Link to="/love/zheling">To love</Link></div>
        </header>
      </div>
    );
  }
}

export default App;
