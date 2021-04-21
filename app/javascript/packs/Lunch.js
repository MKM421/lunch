import React from 'react';
import ReactDOM from 'react-dom';
import './Lunch.css';
import Header from './Header/Header';
import BusinessList from './BusinessList/BusinessList';
import Places from './util/Places';


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
    });
  }

  render() {
    return (
      <div className="App">
        <Header searchPlaces={this.searchPlaces} businesses={this.state.businesses}/>
        <div className="content-container">
          <BusinessList businesses={this.state.businesses} />
          <div className="map-container">
            <div id="map"></div>
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
