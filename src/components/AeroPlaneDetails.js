import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import plane from '../assets/aeroplane.jpg';

function AeroPlaneDetails() {
  const { jetShow } = useSelector((state) => state.aeroplanes);
  const navigate = useNavigate();
  return (
    <div className="position-absolute w-100   page top-0 start-0 d-flex justify-content-center align-items-center ">
      <div className="container  style-card gap-5  justify-content-center align-items-start   row">
        <div className="col">
          <img
            src={jetShow.image}
            className="img-fluid  w-100 imghight mt-5 rounded-1"
            alt=""
          />
        </div>
        <div className="col col-lg-4">
          <ul className="list-group w-100 h-100">
            <li className="list-group-item  d-flex justify-content-end border-0">
              <h3 className="info-section">{jetShow.name}</h3>
            </li>
            <li className="list-group-item border-0">
              <p className="text-right">{jetShow.description}</p>
            </li>
            <li className="list-group-item group-item d-flex justify-content-between gap-5">
              Jet Model
              <span>{jetShow.model}</span>
            </li>
            <li className="list-group-item group-item d-flex justify-content-between gap-5">
              Number of seats
              <span>{jetShow.number_of_seats}</span>
            </li>
            <li className="list-group-item group-item d-flex justify-content-between gap-5">
              Total payment
              <span>
                $
                {jetShow.fee}
              </span>
            </li>
            <li className="list-group-item group-item d-flex justify-content-between gap-5">
              Departure
              <span>{jetShow.location}</span>
            </li>
            <li className="list-group-item border-0 mt-3">
              <p>5.9% APR Representative</p>
            </li>
          </ul>
          <div className="d-flex w-100 justify-content-end  mt-5">
            <button
              type="button"
              className="btn  btn-primary rounded-5 px-4 py-2 "
              onClick={() => navigate('/reserve')}
            >
              <span className="me-3">
                {jetShow.reserved ? 'Not Available' : 'Reserve'}
              </span>
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
