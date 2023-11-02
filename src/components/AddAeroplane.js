import React from 'react';

const AddAeroplane = () => (
  <div>
    <form className="row g-3">
      <div className="col-md-12">
        <input type="text" id="name" className="form-control" placeholder="Name" />
      </div>
      <div className="col-md-12">
        <input type="file" className="form-control" id="image" />
      </div>
      <div className="col-md-12">
        <input type="text" className="form-control" id="fee" placeholder="Enter the fee" />
      </div>
      <div className="col-md-12">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
);

export default AddAeroplane;
