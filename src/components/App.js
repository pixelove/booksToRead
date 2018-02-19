import React, { Component } from 'react';
import '../App.css';
// eslint-disable-next-line
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="pixelove's books to read" />
        <p className="App-intro">
          <strong>placeholder for content</strong>
        </p>
      </div>
    );
  }
}

export default App;
