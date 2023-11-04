import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthContext from '../context/AuthProvider';
import { fetchReservedAeroplanes } from '../redux/aeroplanes/aeroplanesActions';

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
    <>
      {userAeroplanes && userAeroplanes.length > 0 ? (
        <section className="lg:ml-[20%] mt-[4rem] lg:mt-0">
          <div className="grid grid-cols-1 gap-5 p-2 lg:grid-cols-2">
            {userAeroplanes.map((aeroplane) => (
              <ul key={aeroplane.id}>
                <li>{aeroplane.propertyName}</li>
              </ul>
            ))}
          </div>
        </section>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <p>No reserved aeroplanes found.</p>
        </div>
      )}
    </>
  );
};

export default Reservations;
