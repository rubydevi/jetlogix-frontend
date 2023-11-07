import React from 'react';
import PropTypes from 'prop-types';

const AeroplaneForm = ({ aeroplane, setAeroplane, handleSubmit }) => (
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
          type="text"
          className="form-control"
          id="location"
          placeholder="Location"
          value={aeroplane.location}
          onChange={(e) => setAeroplane({
            ...aeroplane,
            location: e.target.value,
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
            fee: +e.target.value,
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

AeroplaneForm.propTypes = {
  aeroplane: PropTypes.shape({
    name: PropTypes.string,
    model: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    number_of_seats: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    location: PropTypes.string,
    fee: PropTypes.number,
    reserved: PropTypes.bool,
  }).isRequired,
  setAeroplane: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AeroplaneForm;
