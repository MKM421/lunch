import React from 'react';
import './GoogleMap.css';
import '../Business/Business.css';
import Button from '@material-ui/core/Button';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import InfoWindow from '../InfoWindow/InfoWindow';



class GoogleMap extends React.Component {
  render() {
    return (
      <div id="map-container">
        <div id="map"></div>
        {
          this.props.businesses.map(business => {
            return <InfoWindow business={business} key={business.id} />
          })
        }
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
