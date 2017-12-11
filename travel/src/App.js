import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import Detail from './Detail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path='/' component={Landing}/>
            <Route exact path='/detail/' component={Detail}/>
        </div>
      </Router>
    );
  }
}

export default App;
