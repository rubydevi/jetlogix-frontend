import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthContext from '../context/AuthProvider';
import { fetchReservedAeroplanes } from '../redux/aeroplanes/aeroplanesActions';
import AeroplaneItem from './AeroplaneItem';

const Reservations = () => {
  const dispatch = useDispatch();
  const userAeroplanes = useSelector((state) => state.aeroplanes.userReservedAeroplanes);
  const loading = useSelector((state) => state.aeroplanes.reservedAeroplanesLoading);
  const error = useSelector((state) => state.aeroplanes.reservedAeroplanesError);

  const userId = useContext(AuthContext).id;
  console.log(userId);

  useEffect(() => {
    dispatch(fetchReservedAeroplanes(userId));
  }, [dispatch, userId]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <h1 className="d-flex justify-content-center mb-5">
          Your Reserved Airplanes
        </h1>

        {userAeroplanes && userAeroplanes.length > 0 ? (
          <ul className="list-unstyled d-flex flex-wrap">
            {userAeroplanes.map((aeroplane) => (
              <AeroplaneItem key={aeroplane.id} aeroplane={aeroplane} />
            ))}
          </ul>
        ) : (
          <p>No reserved aeroplanes found.</p>
        )}
      </div>
    </div>
  );
};

export default Reservations;
