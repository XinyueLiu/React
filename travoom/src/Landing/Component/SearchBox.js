import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import C0 from './C0';
import C1 from './C1';

const categories = [
   {
    'id': 0,
    'display': 'Destinations'
   },
   {
     'id': 1,
     'display': 'Activities'
   }
];

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    }

    this.handleChangeIndex = this.handleChangeIndex.bind(this);
  }

  handleChangeIndex(index) {
    this.setState({
      index: index
    });
  };

  render() {
    const tabs = categories.map((category, i) => {
      const isActive = (this.state.index === i) ? ('is-active') : null;

      return (
        <li
          key={category.id}
          className={isActive}
          onClick={() => {
            this.setState({
              index: i
            });
          }}
        >
          <a>{category.display}</a>
        </li>
      )
    });


    return (
      <div className='SearchBox box'>
        <div className="tabs is-toggle is-fullwidth">
          <ul>
            {tabs}
          </ul>
        </div>
        <SwipeableViews
          index={this.state.index}
          onChangeIndex={this.handleChangeIndex}
          animateHeight={true}
        >
          <C0 />
          <C1 />
        </SwipeableViews>

      </div>
    );
  }
}

export default SearchBox;
