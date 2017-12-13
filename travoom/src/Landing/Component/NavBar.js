import React, { Component } from 'react';
import image from '../../images/logo.png';
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar is-white">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={image} alt="Travoom.com" />
            <h1 className="title is-link">&nbsp;Travoom</h1>
          </a>
        </div>
        <div className="searchbar">
          <div className="field has-addons">
            <div className="control">
              <input id='navsearch' className="input" type="text" placeholder="Find a tour by a keyword"/>
            </div>
            <div className="control">
              <a className="button is-link">
                Search
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
