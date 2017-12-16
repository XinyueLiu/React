import React, { Component } from 'react';
import scriptLoader from 'react-async-script-loader';

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [],
            flag: true
        }
    }

    componentDidUpdate() {
        const {activeProperty} = this.props;
        const {latitude, longitude, index} = activeProperty;
        const {markers} = this.state;

        markers.forEach(marker => {
            const {property} = marker;
            
            markers[property.index].setVisible(true);
                
        })
        this.hideAll();
        this.showIW(index);
    }

    showIW(index) {
        const {markers} = this.state;
        markers[index].iw.open(this.map, markers[index]);
    }

    hideAll() {
        const {markers} = this.state;
        markers.forEach(marker => {
            marker.iw.close();
        }) 
    }




    createMarkers(properties) {
        const {markers} = this.state;
        const {setActiveProperty, activeProperty} = this.props;
        const activePropertyIndex = activeProperty.index;

        properties.forEach(property => {
            const {latitude, longitude, index, city} = property;
            this.marker = new window.google.maps.Marker({
                position: {lat: latitude, lng: longitude},
                map: this.map,
                label: {
                    color: '#ffffff',
                    text: `${index + 1}`
                },
                icon: {
                    url: 'https://ihatetomatoes.net/react-tutorials/google-maps/images/img_map-marker.png',
                    // This marker is 22 pixels wide by 40 pixels high.
                    size: new window.google.maps.Size(22, 55),
                    // The origin for this image is (0, 0).
                    origin: new window.google.maps.Point(0, -15),
                    // The anchor for this image is the base of the cross at (11, 52).
                    /*
                        The point on the image that will be placed at the LatLng position of the marker. 
                        This defaults to 50% from the left of the image and at the bottom of the image.
                    */
                    anchor: new window.google.maps.Point(11, 52)
                },
                property
            });

            const iw = new window.google.maps.InfoWindow({
                content: `<h1>${city}</h1>`
            })
            this.marker.iw = iw;

            this.marker.addListener('click', function(){
                
                // hide all other info boxes on click
                this.hideAll();

                // set active property onto the state
                setActiveProperty(property, true);

            }.bind(this)); // closure

            //push this marker to the markers array on the state
            markers.push(this.marker);

            //show active property info window
            this.showIW(activePropertyIndex);
        });
    }

    componentWillReceiveProps({isScriptLoadSucceed, nextProps}){
        if (isScriptLoadSucceed) {
            if(this.state.flag) {
                var markers = [];
                const {properties, activeProperty} = this.props;
                const {latitude, longitude} = activeProperty;
                this.map = new window.google.maps.Map(document.getElementById('map'), {
                    center: {lat: latitude, lng: longitude},
                    mapTypeControl: false,
                    zoom: 15
                });
                this.createMarkers(properties);
                this.setState({
                    flag: false
                  })
            }
              
        }
        else{
            alert("script not loaded")
        }
    }

    render() {
        return (
            <div className="mapContainer">
                <div id="map" ref="map"></div>
            </div>
        )
    }
}

export default scriptLoader(
    ["https://maps.googleapis.com/maps/api/js?key=AIzaSyC08wMCOTzcBvwEElHSkOHuQ0HndkM5t3Q"]
)(GoogleMap)