import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAeroplanes } from '../redux/aeroplanes/aeroplanesSplice';

const Aeroplane = () => {
  const dispatch = useDispatch();
  const { aeroplanes, loading } = useSelector((store) => store.aeroplanes);

  useEffect(() => {
    dispatch(fetchAeroplanes());
  }, [dispatch]);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="label">
        Aeroplanes:
      </h1>
      <ul>
        {aeroplanes.aeroplanes}
      </ul>
    </div>
  );
};

export default Aeroplane;
