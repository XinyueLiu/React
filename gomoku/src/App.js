import React, { Component } from 'react';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>GoMoku Game</h1>
          <Board />
      </div>
    );
  }
}

export default App;
