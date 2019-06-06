import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./components/search";

class App extends Component {
  render() {
    return (
      <div className="App">

       <h1 className="title">Iron Store</h1>
       <Search />
      </div>
    );
  }
}

export default App;
