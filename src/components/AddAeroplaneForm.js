import React from 'react';
import PropTypes from 'prop-types';

const AeroplaneForm = ({ aeroplane, setAeroplane, handleSubmit }) => {
  const handleInputChange = (e, field) => {
    setAeroplane({
      ...aeroplane,
      [field]: e.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      handleSubmit(event);
    }

    form.classList.add('was-validated');
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Name"
              value={aeroplane.name}
              onChange={(e) => handleInputChange(e, 'name')}
              required
            />

            <div className="invalid-feedback">Please provide a valid name.</div>
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="text"
              id="model"
              className="form-control"
              placeholder="Model"
              value={aeroplane.model}
              onChange={(e) => handleInputChange(e, 'model')}
            />
          </div>
          <div className="col-12 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Image URL"
              id="image"
              value={aeroplane.image}
              onChange={(e) => handleInputChange(e, 'image')}
            />
          </div>
          <div className="col-12 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              id="description"
              value={aeroplane.description}
              onChange={(e) => handleInputChange(e, 'description')}
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="number"
              className="form-control"
              id="number_of_seats"
              placeholder="Number of seats"
              value={aeroplane.number_of_seats}
              onChange={(e) => handleInputChange(e, 'number_of_seats')}
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="Location"
              value={aeroplane.location}
              onChange={(e) => handleInputChange(e, 'location')}
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="number"
              className="form-control"
              id="fee"
              placeholder={aeroplane.fee === 0 ? 'Enter fee' : ''}
              value={aeroplane.fee !== 0 ? aeroplane.fee : ''}
              onChange={(e) => handleInputChange(e, 'fee')}
            />
          </div>

        </div>
        <div className="col-12 mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

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
