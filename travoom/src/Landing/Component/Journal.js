import React, { Component } from 'react';
import data from '../../data/Data';
import Card from './Card';

class Journal extends Component {
  render() {
    const journals = data.journals.map((journal, i) => {
        return (
            <Card key={journal.index} data={journal}/>
        );
    });
    return (
        <div className='journal'>
            <div className='sub'>
                <h1 className='subtitle'>Journals from Travoomer</h1>
            </div>
            <div className='journal-content'>
            {journals}
            </div>
        </div>
    );
  }
}

export default Journal;