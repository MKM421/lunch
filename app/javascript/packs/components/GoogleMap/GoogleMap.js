import React from 'react';
import './GoogleMap.css';


class GoogleMap extends React.Component {
  render() {
    return (
      <div className="map-container">
        <div id="map"></div>
      </div>
    );
  }
}

export default GoogleMap;
