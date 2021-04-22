import React from 'react';
import Button from '@material-ui/core/Button';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import './GoogleMap.css';


class GoogleMap extends React.Component {
  render() {
    return (
      <div id="map-container">
        <div id="map"></div>

        <div id="info-content">
          <div id="iw-name"></div>
          <div id="iw-rating"></div>
        </div>
        
        <div className="mobile-switch-container">
          <Button
            id="list-button"
            variant="contained"
            color="primary"
            onClick={() => {
              document.getElementById("map-container").style.display = "none";
              document.getElementById("list-button").style.display = "none";
              document.getElementById("BusinessList").style.display = "block";
              document.getElementById("map-button").style.display = "block";
            }}
          >
            <FormatListBulletedIcon className="mobile-switch-icon"/> List
          </Button>
        </div>

      </div>
    );
  }
}

export default GoogleMap;
