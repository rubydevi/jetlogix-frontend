import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { showAeroplane } from '../redux/aeroplanes/aeroplanesActions';

const AeroplaneItem = ({ aeroplane }) => {
  const { auth } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDispatch = (aeroplaneId) => {
    dispatch(showAeroplane({ userId: auth.id, aeroplaneId }));
    navigate('/details');
  };

  return (
    <li style={{ width: '18rem' }}>
      <button
        onClick={() => handleDispatch(aeroplane.id)}
        className="card m-2"
        type="button"
      >
        View
      </button>
      <div className="card-body">
        <img
          src={aeroplane.image}
          alt={aeroplane.name}
          className="card-img-top"
        />
        <h6 className="card-title fw-bold text-uppercase">{aeroplane.name}</h6>
        <p className="card-text">{aeroplane.description}</p>
      </div>
    </li>
  );
};

AeroplaneItem.propTypes = {
  aeroplane: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default AeroplaneItem;
