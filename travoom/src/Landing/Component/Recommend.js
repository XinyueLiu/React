import React, { Component } from 'react';
import data from '../../data/Data';
import Card2 from './Card2';
import GoogleMap  from './GoogleMap';
import jump from 'jump.js';
import {easeInOutCubic} from '../../utils/Easing';

class Recommend extends Component {
    constructor(props){
        super(props);
        this.state = {
          properties: data.properties,
          activeProperty: data.properties[0]
        }
        this.setActiveProperty = this.setActiveProperty.bind(this);
    }

    setActiveProperty(property, scroll) {
        const {index} = property;
        this.setState({
          activeProperty: property
        })
    
        //only scroll if we click on the pin, not the card
        if (scroll) {
            //scroll to the right property
            const target = `#card-${index}`;
            jump(document.getElementById(target), {
                duration: 800,
                easing: easeInOutCubic
            })
        }
        
    }

    render(){
        const {properties, activeProperty} = this.state;
        const propertiesList = properties;
        return (
          <div className='recommend'>
            <div className='sub'>
                <h1 className='subtitle'>Recommended tour for you</h1>
            </div>
            <GoogleMap 
              properties={properties} 
              activeProperty={activeProperty} 
              setActiveProperty={this.setActiveProperty}
            />
            <div className="listings">
              <div className="cards container">
                <div className={`cards-list row ${propertiesList.length === 0 ? 'is-empty' : ''}`}>
                  {
                    propertiesList.map(property => {
                        return <Card2 
                                key={property.index} 
                                property={property}
                                activeProperty={activeProperty}
                                setActiveProperty={this.setActiveProperty}/>;
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        )
      }
}

export default Recommend;