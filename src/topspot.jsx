import React from 'react';
import PropTypes from 'prop-types';

const TopSpot = props => (
  <div className='well'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a className='btn btn-primary' href={ `https://maps.google.com/?q=${props.location[0]},${props.location[1]}` } role='button'>Link</a>
  </div>
);

TopSpot.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.arrayOf(PropTypes.number)
};

export default TopSpot;
