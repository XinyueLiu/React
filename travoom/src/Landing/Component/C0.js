import React, { Component } from 'react';

class C0 extends Component {
  render() {
    return (
      <div className='tab-content'>
          <div className='columns'>
            <div className='column is-half'>
              City:
              <div className='search-box'>Los Angeles, CA</div>
            </div>
            <div className='column is-half'>
              Destination:
              <div className='search-box'>Beijing, CN</div>
            </div>
          </div>
          <div className='columns'>
            <div className='column is-half'>
              Departs:
              <div className='search-box'>mm/dd/yyyy</div>
            </div>
            <div className='column is-half'>
              Return:
              <div className='search-box'>mm/dd/yyyy</div>
            </div>
          </div>
          <div className='columns'>
              <div className="search-button">Search Tours</div>
          </div>
        </div>
    );
  }
}

export default C0;
