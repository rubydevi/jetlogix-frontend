import React from 'react';
import PropTypes from 'prop-types';

const AeroplaneItem = ({ aeroplane }) => (
  <li className="card m-2" style={{ width: '18rem' }}>
    <div className="card-body">
      <img src={aeroplane.image} alt={aeroplane.name} className="card-img-top" />
      <h6 className="card-title fw-bold text-uppercase">{aeroplane.name}</h6>
      <p className="card-text">{aeroplane.description}</p>
    </div>
  </li>
);

AeroplaneItem.propTypes = {
  aeroplane: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default AeroplaneItem;
