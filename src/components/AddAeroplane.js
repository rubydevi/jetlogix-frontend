import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiAlarm } from 'react-icons/bi';
import { createAeroplane } from '../redux/aeroplanes/aeroplanesActions';
import AuthContext from '../context/AuthProvider';
import AddAeroplaneForm from './AddAeroplaneForm';

const AddAeroplane = () => {
  const { auth } = useContext(AuthContext);
  const [aeroplane, setAeroplane] = useState({
    name: '',
    model: '',
    image: '',
    description: '',
    number_of_seats: '',
    location: '',
    fee: 0,
    reserved: false,
  });

  const dispatch = useDispatch();
  const history = useNavigate();
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(createAeroplane({ aeroplane, auth }));
      if (response.payload && !response.error) {
        history('/aeroplanes');
      } else {
        setError('Error or invalid response');
        const liveToast = new window.bootstrap.Toast(document.getElementById('liveToast'));
        liveToast.show();
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
      const liveToast = new window.bootstrap.Toast(document.getElementById('liveToast'));
      liveToast.show();
    }
  };

  return (
    <div className="container">
      <div className="toast-container position-fixed top-0 end-0 p-3">
        <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <div className="float-sm-start">
              <BiAlarm size={20} className="me-2" />
              <i className="bi bi-react me-2" />
            </div>

            <strong className="me-auto">Alert</strong>
            <div className="float-sm-end">
              <button
                type="button"
                className="btn-close me-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
                id="toastClose"
              />
            </div>
          </div>
          <div className="toast-body">{error}</div>
        </div>
      </div>
      <AddAeroplaneForm
        aeroplane={aeroplane}
        setAeroplane={setAeroplane}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddAeroplane;
