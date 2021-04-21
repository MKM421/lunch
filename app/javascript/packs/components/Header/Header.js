import React from 'react';
import './Header.css';
import Logo from 'images/all-trails-logo.svg';
import SearchBar from '../SearchBar/SearchBar';
import FilterButton from '../FilterButton/FilterButton';

class Header extends React.Component {
  render() {
    return (
      <div className="page-header">
        <div className="header-container">
          <div className="logo-container">
            <img className="logo" src={Logo} />
            <h1 className="logo-text">at Lunch</h1>
          </div>
          <div className="search-filter-container">
            <FilterButton businesses={this.props.businesses}/>
            <SearchBar searchPlaces={this.props.searchPlaces} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
