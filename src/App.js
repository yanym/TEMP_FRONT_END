import React, { Component } from 'react';
import './App.css';
import Showtime from './components/Showtime';
import EnterLabel from './components/EnterLabel';

class App extends Component {
  render() {
    return (
      <div>
        <EnterLabel />
        <Showtime />
      </div>
    );
  }
}

export default App;