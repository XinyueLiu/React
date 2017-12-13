import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './swipe/Pagination';
import SearchBox from './SearchBox';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: 'relative',
  },
  slide: {
    padding: 15,
    minHeight: 500,
    color: '#fff',
    textAlign: 'right'
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

class Swipe extends Component {
  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div className='Swipe'>
        <div style={styles.root}>
          <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
              Skiing in Austria
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
              Manchester City playing at The Etihad Stadium
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
              Driving tours in Italy
            </div>
          </AutoPlaySwipeableViews>
          <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />
        </div>
        <SearchBox />
        <div className='swipe-title'>
          <p className="title is-1">Advantures of A Lifetime</p>
        </div>
      </div>
    );
  }
}

export default Swipe;
