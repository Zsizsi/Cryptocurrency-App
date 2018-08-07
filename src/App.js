import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Tickers from './Tickers.js';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Tickers />
      </div>
    );
  }
}

export default App;
