import React, { useState } from 'react';

const AddAeroplane = () => {
  const [aeroplane, setAeroplane] = useState({
    name: '',
    image: '',
    fee: 0,
    pilotLicense: '',
    manufacturer: '',
  });

  const {
    name, image, fee, pilotLicense, manufacturer,
  } = aeroplane;

  const handleChange = (e) => {
    setAeroplane({ ...aeroplane, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(aeroplane);
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
            type="file"
            className="form-control"
            id="image"
            value={image}
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
        <div className="mb-3 col-6">
          <input
            type="text"
            className="form-control"
            id="pilotLicense"
            placeholder="Pilot's License"
            value={pilotLicense}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-6">
          <input
            type="text"
            className="form-control"
            id="manufacturer"
            placeholder="Manufacturer"
            value={manufacturer}
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
