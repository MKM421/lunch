import React from 'react';
import ReactDOM from 'react-dom';
import { Loader } from '@googlemaps/js-api-loader';
import './Lunch.css';
import Header from './components/Header/Header';
import BusinessList from './components/BusinessList/BusinessList';
import GoogleMap from './components/GoogleMap/GoogleMap';
import Places from './util/Places';


const loader = new Loader({
  apiKey: process.env.GOOGLE_API_KEY,
  version: "weekly",
  libraries: ["places"]
});

// Center map on san francisco by default
const mapOptions = {
  center: {
    lat: 37.7590826,
    lng: -122.4457663
  },
  zoom: 12,
  disableDefaultUI: true
};


// Load Google Map with Promise
loader.load()
  .then(() => {
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  })


class Lunch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: []
    };

    this.searchPlaces = this.searchPlaces.bind(this);
  }


  searchPlaces(term, location, sortBy) {
    Places.search(term, location, sortBy).then(results => {
      this.setState({businesses: results});

      const map = new google.maps.Map(document.getElementById("map"), mapOptions);

      results.forEach(place => {
        // map marker styles
        const svgMarker = {
          path: "M32 2a20 20 0 0 0-20 20c0 18 20 39 20 39s20-21 20-39A20 20 0 0 0 32 2z",
          fillColor: "#808080",
          fillOpacity: 1,
          strokeWeight: 1,
          strokeColor: '#eee',
          rotation: 0,
          scale: .5,
          anchor: new google.maps.Point(15, 30),
        };
        // set map marker for each restaurant
        const marker = new google.maps.Marker({
          map,
          icon: svgMarker,
          title: place.name,
          position: place.location,
          animation: google.maps.Animation.DROP
        });
        // Set infoWindow content
        const contentString = `
          <div id="content">
            <h4>${place.name}</h4>
            <h5 id="iw-rating">${place.rating}</h5>
          </div>
        `;

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
        });
        // Show infoWindow for each restaurant
        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });
      })
    });
  }

  render() {
    return (
      <div className="App">
        <Header searchPlaces={this.searchPlaces} businesses={this.state.businesses}/>
        <div className="content-container">
          <BusinessList businesses={this.state.businesses} />
          <GoogleMap businesses={this.state.businesses} />

          <div className="mobile-button">
          {/* TODO: add mobile button to switch map and list views */}
          </div>
        </div>

      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Lunch />,
    document.body.appendChild(document.createElement('div')),
  )
})
