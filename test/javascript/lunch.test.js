import React from 'react';
import ReactDOM from 'react-dom';
import Lunch from '../../app/javascript/packs/Lunch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Lunch />, div)
});
