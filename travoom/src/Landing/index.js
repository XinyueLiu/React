import React, { Component } from 'react';
import NavBar from './Component/NavBar';
import Swipe from './Component/Swipe';
import Journal from './Component/Journal';
import Recommend from './Component/Recommend';

class Landing extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Swipe />
        <Journal />
        <Recommend />
      </div>
    );
  }
}

export default Landing;
