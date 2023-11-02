import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchAeroplanes from '../redux/aeroplanes/aeroplanesActions';

const Aeroplane = () => {
  const dispatch = useDispatch();
  const aeroplanesData = useSelector((state) => state.aeroplanes.aeroplanes);
  const loading = useSelector((state) => state.aeroplanes.loading);
  const error = useSelector((state) => state.aeroplanes.error);

  useEffect(() => {
    dispatch(fetchAeroplanes());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <h1 className="d-flex justify-content-center mb-5">Private Airplanes</h1>

        {aeroplanesData.aeroplanes && aeroplanesData.aeroplanes.length > 0 ? (
          <ul className="list-unstyled d-flex flex-wrap">
            {aeroplanesData.aeroplanes.map((aeroplane) => (
              <li key={aeroplane.id} className="card m-2" style={{ width: '18rem' }}>
                <div className="card-body">
                  <img src={aeroplane.image} alt={aeroplane.name} className="card-img-top" />
                  <h6 className="card-title fw-bold text-uppercase">{aeroplane.name}</h6>
                  <p className="card-text">
                    {aeroplane.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No aeroplanes available.</p>
        )}
      </div>
    </div>
  );
};

export default Aeroplane;
