import React, { Component } from 'react';
import NavBar from './Component/NavBar';
import Swipe from './Component/Swipe';

class Landing extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Swipe />
      </div>
    );
  }
}

export default Landing;
