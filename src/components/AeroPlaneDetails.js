import React from 'react';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import plane from '../assets/aeroplane.jpg';

function AeroPlaneDetails() {
  return (
    <div className="position-absolute w-100   page top-0 start-0 d-flex justify-content-center align-items-center ">
      <div className="container  style-card gap-5  justify-content-center align-items-start   row">
        <div className="col">
          <img
            src={plane}
            className="img-fluid  w-100 imghight mt-5 rounded-1"
            alt=""
          />
        </div>
        <div className="col col-lg-4">
          <ul className="list-group w-100 h-100">
            <li className="list-group-item border-0">
              <h3 className="info-section">Example usage </h3>
            </li>
            <li className="list-group-item border-0">
              <p className="text-right">d Columns and gutters Grid tiers</p>
            </li>
            <li className="list-group-item group-item d-flex justify-content-between gap-5">
              An item
              <span>$45</span>
            </li>
            <li className="list-group-item group-item d-flex justify-content-between gap-5">
              A second item
              <span>$45</span>
            </li>
            <li className="list-group-item group-item d-flex justify-content-between gap-5">
              Number of seats
              <span>5</span>
            </li>
            <li className="list-group-item group-item d-flex justify-content-between gap-5">
              Total payment
              <span>$45</span>
            </li>
            <li className="list-group-item group-item d-flex justify-content-between gap-5">
              Departure
              <span>location</span>
            </li>
            <li className="list-group-item border-0 mt-3">
              <p>5.9% APR Representative</p>
            </li>
          </ul>
          <div className="d-flex w-100 justify-content-end  mt-5">
            <button
              type="button"
              className="btn  btn-primary rounded-5 px-4 py-2 "
            >
              <span className="me-3">Reserve</span>
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                style={{ color: '#ffffff' }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AeroPlaneDetails;
