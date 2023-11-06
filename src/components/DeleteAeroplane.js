import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAeroplanes, deleteAeroplane } from '../redux/aeroplanes/aeroplanesActions';
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
    }
  };

  return (
    <div className="d-flex align-item-center">
      {aeroplanesData.aeroplanes && aeroplanesData.aeroplanes.length > 0 ? (
        <table className="table table-borderless table-hover">
          <thead>
            <tr>
              <th>Private Planes</th>
            </tr>
          </thead>
          <tbody>
            {aeroplanesData.aeroplanes.map((aeroplane) => (
              <tr key={aeroplane.id}>
                <td>
                  {aeroplane.name}
                  {console.log(aeroplane.isRemoved)}
                </td>
                <td>

                  <button
                    type="submit"
                    onClick={() => handleDelete(aeroplane.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
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
