import React, {Component} from 'react';

class GoogleMap extends Component {
  //React lifecycle method that gets called after the component has been rendered.
  componentDidMount() {
    //Creating an imbedded google map inside of our document
    //The google.maps.Map() method takes a reference to an html node where we want the map rendered at as its first argument and then an options object as the 2nd argument that details items about our map.
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    

    //React makes use of refs, which act like an anchor or hook into whatever element they are used on. So by using this.refs.map, we can gain access to the div element below after it has been rendered to the DOM.
    return <div ref="map" />
  }
}

export default GoogleMap;
