import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAeroplanes, deleteAeroplane } from '../redux/aeroplanes/aeroplanesActions';
import { aeroplaneRemoved } from '../redux/aeroplanes/aeroplanesSlice';
import useAuth from '../hooks/useAuth';

const DeleteAeroplane = () => {
  const { auth } = useAuth();
  const dispatch = useDispatch();
  const aeroplaneStatus = useSelector((state) => state.aeroplanes.loading);
  const aeroplanesData = useSelector((state) => state.aeroplanes.aeroplanes);

  const { id } = auth;

  useEffect(() => {
    dispatch(fetchAeroplanes(id));
  }, [dispatch, id]);

  const handleDelete = (planeId) => {
    if (aeroplaneStatus === false) {
      dispatch(deleteAeroplane({ userId: id, aeroplaneId: planeId }));
      dispatch(aeroplaneRemoved(planeId));
    }
  };

  return (
    <div className="col-sm-6 col-lg-8">
      <h3 className="text-center">Delete Aeroplane</h3>
      <small className="text-center d-block mb-5">Click on delete button to delete aeroplane</small>
      {aeroplanesData.aeroplanes && aeroplanesData.aeroplanes.length > 0 ? (
        <table className="table table-responsive table-hover table-bordered table-striped">
          <thead>
            <tr>
              <th>Private Plane</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {aeroplanesData.aeroplanes.map((aeroplane) => (
              <tr key={aeroplane.id}>
                <td>
                  {aeroplane.name}
                </td>
                <td>
                  <img
                    src={aeroplane.image}
                    alt={aeroplane.name}
                    style={{ width: '100px' }}
                  />
                </td>
                <td>
                  {aeroplane.isRemoved ? (
                    <span className="text-danger">Deleted</span>
                  ) : (
                    <button
                      type="submit"
                      onClick={() => handleDelete(aeroplane.id)}
                      className="btn btn-outline-danger btn-sm mt-0"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No aeroplanes yet</div>
      )}
    </div>
  );
};

export default DeleteAeroplane;
