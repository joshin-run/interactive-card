import React, { Component } from 'react';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-wrapper">
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
