import React from 'react';
import Rating from '@material-ui/lab/Rating';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Business.css';


class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src='' alt=''/>
        </div>
        <div className="Business-information">
          <h2>{this.props.business.name}</h2>
          <div className="Business-reviews">
            <Rating className="restaurant-rating" name="half-rating-read" precision={0.1} value={this.props.business.rating} readOnly />
            <span className="user-ratings-total">({this.props.business.reviewCount})</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
