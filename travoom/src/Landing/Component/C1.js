import React, { Component } from 'react';

class C1 extends Component {
  render() {
    return (
      <div className='tab-content'>
        <div className="columns">
          <div className="column">
            <h1 className="subtitle">Keywords:</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <a className="button is-link">Fishing</a>&nbsp;
            <a className="button is-link">Kayaking</a>&nbsp;
            <a className="button is-link">Skiing</a>&nbsp;
            <a className="button is-link">Hunting</a>&nbsp;
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <a className="button is-link">Hunting</a>&nbsp;
            <a className="button is-link">Surfing</a>&nbsp;
            <a className="button is-link">Golf</a>&nbsp;
            <a className="button is-link">Carnaval</a>&nbsp;
          </div>
        </div>

          <div className="field has-addons">
            <div className="control">
              <input id='searchbox-input' className="input" type="text" placeholder="Find a tour"/>
            </div>
            <div className="control">
              <a className="button is-link">
                Search
              </a>
            </div>
          </div>

      </div>
    );
  }
}

export default C1;
