import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservedAeroplanes } from '../redux/aeroplanes/aeroplanesActions';
import ReservationCard from './ReservationCard';

const Reservations = () => {
  const dispatch = useDispatch();
  const userAeroplanes = useSelector((state) => state.reservations.reservation);
  const loading = useSelector((state) => state.aeroplanes.reservedAeroplanesLoading);
  const error = useSelector((state) => state.aeroplanes.reservedAeroplanesError);
  useEffect(() => {
    dispatch(fetchReservedAeroplanes());
  }, [dispatch]);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p>Something went wrong</p>
      </div>
    );
  }

  return (
    <div>
      {userAeroplanes && userAeroplanes.length > 0 ? (
        <section className="lg:ml-[20%] mt-[4rem] lg:mt-0">
          <div className="card-deck">
            {userAeroplanes.map((aeroplane, index) => (
              <ReservationCard
                key={aeroplane.id}
                aeroplane={aeroplane}
                index={index}
              />
            ))}
          </div>
        </section>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <p>No reserved aeroplanes found.</p>
        </div>
      )}
    </div>
  );
};

export default Reservations;
