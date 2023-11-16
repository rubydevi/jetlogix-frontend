import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservedAeroplanes } from '../redux/aeroplanes/aeroplanesActions';
import ReservationCard from './ReservationCard';
import ReserveCardLoading from './ReserveCardLoading';

const Reservations = () => {
  const dispatch = useDispatch();
  const userAeroplanes = useSelector((state) => state.reservations.reservation);
  const loading = useSelector((state) => state.reservations.loading);
  const error = useSelector(
    (state) => state.aeroplanes.reservedAeroplanesError,
  );
  useEffect(() => {
    dispatch(fetchReservedAeroplanes());
  }, [dispatch]);

  if (loading) {
    return <ReserveCardLoading />;
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <p>Something went wrong</p>
      </div>
    );
  }

  const aeroplaneCards = userAeroplanes.map((aeroplane, index) => (
    <div className="col-lg-6 col-12 mb-4" key={aeroplane.id}>
      <ReservationCard
        aeroplane={aeroplane}
        index={index}
        style={{ marginRight: '40px' }}
      />
    </div>
  ));

  return (
    <div>
      <div className="col-12 text-center">
        <h3 className="fw-normal"> Reservations</h3>
      </div>
      {userAeroplanes && userAeroplanes.length > 0 ? (
        <div className="row">{aeroplaneCards}</div>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <p>No reserved aeroplanes found.</p>
        </div>
      )}
    </div>
  );
};

export default Reservations;
