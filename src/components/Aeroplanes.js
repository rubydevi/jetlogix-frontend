import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthContext from '../context/AuthProvider';
import { fetchAeroplanes } from '../redux/aeroplanes/aeroplanesActions';
import AeroplaneItem from './AeroplaneItem';

const Aeroplane = () => {
  const dispatch = useDispatch();
  const aeroplanesData = useSelector((state) => state.aeroplanes.aeroplanes);
  const loading = useSelector((state) => state.aeroplanes.loading);
  const error = useSelector((state) => state.aeroplanes.error);

  const { id } = useContext(AuthContext);

  useEffect(() => {
    dispatch(fetchAeroplanes(id));
  }, [dispatch, id]);

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
          Private Airplanes
        </h1>

        {aeroplanesData.aeroplanes && aeroplanesData.aeroplanes.length > 0 ? (
          <ul className="list-unstyled d-flex flex-wrap">
            {aeroplanesData.aeroplanes.map((aeroplane) => (
              <AeroplaneItem
                key={aeroplane.id}
                aeroplane={aeroplane}
                classNames={{
                  button: 'card m-2',
                  aeroplaneBody: 'card-body',
                  image: 'card-img-top',
                  title: 'card-title fw-bold text-uppercase',
                  description: 'card-text',
                }}
              />
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
