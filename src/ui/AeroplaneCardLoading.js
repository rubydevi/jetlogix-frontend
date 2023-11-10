import React from 'react';

const AeroplaneCardLoading = () => (
  <li style={{ width: '17rem' }} className="list-group-item">
    {/* <button type="button" /> */}
    <div className="">
      <div className="">
        <img alt="" className=" skeleton  skeleton-card-img" />
      </div>
      <div className="d-flex justify-content-center align-items-center  w-75">
        <div className="h6 skeleton  skeleton-card-header" />
      </div>
      <p className=" skeleton skeleton-card-text" />
      <p className=" skeleton  skeleton-card-text" />
      <p className=" skeleton  skeleton-card-text" />
      <p className=" skeleton  skeleton-card-text" />
      <p className=" skeleton  skeleton-card-text" />
    </div>
  </li>
);

export default AeroplaneCardLoading;
