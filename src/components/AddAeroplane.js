import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createAeroplane } from '../redux/aeroplanes/aeroplanesActions';
import AuthContext from '../context/AuthProvider';
import AeroplaneForm from './AddAeroplaneForm';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(createAeroplane({ aeroplane, auth }));
      if (response.payload && !response.error) {
        history('/aeroplanes');
      } else {
        console.error('Error or invalid response');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <AeroplaneForm
      aeroplane={aeroplane}
      setAeroplane={setAeroplane}
      handleSubmit={handleSubmit}
    />
  );
};

export default AddAeroplane;
