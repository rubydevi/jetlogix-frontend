import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { createAeroplane } from '../redux/aeroplanes/aeroplanesActions';
import AuthContext from '../context/AuthProvider';

const AddAeroplane = () => {
  const { auth } = useContext(AuthContext);

  const [aeroplane, setAeroplane] = useState({
    name: '',
    model: '',
    image: '',
    description: '',
    number_of_seats: '',
    fee: 0,
    reserved: false,
  });

  const dispatch = useDispatch();

  // const handleChange = (e) => {
  //   setAeroplane({ ...aeroplane, [e.target.id]: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(auth);
    dispatch(createAeroplane(aeroplane, auth));
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
            value={aeroplane.name}
            onChange={(e) => setAeroplane({
              ...aeroplane,
              name: e.target.value,
            })}
          />
        </div>
        <div className="mb-3 col-6">
          <input
            type="text"
            id="model"
            className="form-control"
            placeholder="Model"
            value={aeroplane.model}
            onChange={(e) => setAeroplane({
              ...aeroplane,
              model: e.target.value,
            })}
          />
        </div>
        <div className="mb-3 col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Image URL"
            id="image"
            value={aeroplane.image}
            onChange={(e) => setAeroplane({
              ...aeroplane,
              image: e.target.value,
            })}
          />
        </div>
        <div className="mb-3 col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            id="description"
            value={aeroplane.description}
            onChange={(e) => setAeroplane({
              ...aeroplane,
              description: e.target.value,
            })}
          />
        </div>
        <div className="mb-3 col-6">
          <input
            type="number"
            className="form-control"
            id="number_of_seats"
            placeholder="Number of seats"
            value={aeroplane.number_of_seats}
            onChange={(e) => setAeroplane({
              ...aeroplane,
              number_of_seats: e.target.value,
            })}
          />
        </div>
        <div className="mb-3 col-6">
          <input
            type="number"
            className="form-control"
            id="fee"
            placeholder="Enter the fee"
            value={aeroplane.fee}
            onChange={(e) => setAeroplane({
              ...aeroplane,
              fee: e.target.value,
            })}
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
