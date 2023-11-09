import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createAeroplane } from '../redux/aeroplanes/aeroplanesActions';
import AuthContext from '../context/AuthProvider';
import AddAeroplaneForm from './AddAeroplaneForm';
import Toast from './Toast';

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
        setError('Something went wrong');
        const liveToast = new window.bootstrap.Toast(document.getElementById('liveToast'));
        liveToast.show();
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

  return (
    <div className="container">
      <div className="col-12 text-center">
        <h3 className="fw-normal"> Add a New Aeroplane</h3>
      </div>
      <Toast error={error} />
      <AddAeroplaneForm
        aeroplane={aeroplane}
        setAeroplane={setAeroplane}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddAeroplane;
