import React from 'react';
import './FilterButton.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #ddd',
  },
})((props) => (
  <Menu
    className="filter-menu-container"
    elevation={10}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
));


export default function FilterMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="filter">
      <Button
        className="filter-button"
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Filter
      </Button>
      <StyledMenu
        id="filter-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="filter-menu-item">
          <ListItemIcon className="filter-item-icon">
            <RadioButtonUncheckedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText className="filter-item-text" primary="Ratings High to Low" />
        </div>
        <div className="filter-menu-item">
          <ListItemIcon className="filter-item-icon">
            <RadioButtonUncheckedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText className="filter-item-text" primary="Ratings Low to High" />
        </div>
        <div className="apply-button-container">
          <Button className="apply-button">Apply</Button>
        </div>
      </StyledMenu>
    </div>
  );
}
