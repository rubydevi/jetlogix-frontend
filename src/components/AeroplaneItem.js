import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { showAeroplane } from '../redux/aeroplanes/aeroplanesActions';

const AeroplaneItem = ({ aeroplane, classNames }) => {
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
        className={classNames.button}
        type="button"
      >
        <div className={classNames.aeroplaneBody}>
          <img
            src={aeroplane.image}
            alt={aeroplane.name}
            className={classNames.image}
          />
          <h6 className={classNames.title}>{aeroplane.name}</h6>
          <p className={classNames.description}>{aeroplane.description}</p>
        </div>
      </button>
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
  classNames: PropTypes.shape({
    button: PropTypes.string,
    aeroplaneBody: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default AeroplaneItem;
