import React from 'react';
import './GoogleMap.css';


class GoogleMap extends React.Component {
  render() {
    return (
      <div className="map-container">
        <div id="map"></div>
        <div id="info-content">
          <div id="iw-name"></div>
          <div id="iw-rating"></div>
        </div>
      </div>
    );
  }
}

export default GoogleMap;
