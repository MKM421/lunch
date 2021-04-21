import React from 'react';
import ReactDOM from 'react-dom';
import './App/App.css';

import BusinessList from './BusinessList/BusinessList';
import SearchBar from './SearchBar/SearchBar';
import Places from './Places';

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
        <h1>AllTrails at Lunch</h1>
        <SearchBar searchPlaces={this.searchPlaces} />
        <BusinessList businesses={this.state.businesses} />
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
