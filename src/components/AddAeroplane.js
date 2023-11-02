import React, { useState } from 'react';
import axios from 'axios';

const AddAeroplane = () => {
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

  const {
    // eslint-disable-next-line camelcase
    name, model, image, description, number_of_seats, fee,
  } = aeroplane;

  const handleChange = (e) => {
    setAeroplane({ ...aeroplane, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/api/v1/users/1/aeroplanes', aeroplane)
      .then((response) => {
        console.log('Aeroplane added:', response.data);
      })
      .catch((error) => {
        console.error('Error adding aeroplane:', error);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 col-6">
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-6">
          <input
            type="text"
            className="form-control"
            id="model"
            placeholder="Enter the model"
            value={model}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-6">
          <input
            type="text"
            className="form-control"
            id="image"
            value={image}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-6">
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter the description"
            value={description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-6">
          <input
            type="text"
            className="form-control"
            id="number_of_seats"
            placeholder="Enter the number of sits"
            // eslint-disable-next-line camelcase
            value={number_of_seats}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-6">
          <input
            type="number"
            className="form-control"
            id="fee"
            placeholder="Enter the fee"
            value={fee}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAeroplane;
