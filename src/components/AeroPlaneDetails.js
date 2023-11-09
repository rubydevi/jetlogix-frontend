import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { reserveJet } from '../redux/aeroplanes/aeroplanesSlice';
import SkeletonLoading from '../ui/SkeletonLoading';

function AeroPlaneDetails() {
  const { jetShow, loading } = useSelector((state) => state.aeroplanes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReserve = (id) => {
    dispatch(reserveJet(id));
    navigate('/reserve');
  };

  return (
    <>
      {loading ? (
        <SkeletonLoading />
      ) : (
        <div className=" container-md d-flex flex-column flex-lg-column gap-lg-4 flex-xl-row  p-1 ms-md-5 ms-lg-2">
          <div className="col">
            <img
              src={jetShow.image}
              className="img-fluid  w-lg-100 imghight  rounded-1"
              alt=""
            />
          </div>
          <div className="col-xl-4">
            <ul className="list-group w-100 h-100">
              <li className="list-group-item  d-flex justify-content-end border-0">
                <h3 className="info-section m-0">{jetShow.name}</h3>
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
              <li className="list-group-item border-0 mt-1">
                <p>5.9% APR Representative</p>
              </li>
            </ul>
            <div className="d-flex w-100 justify-content-end">
              <button
                type="button"
                className="btn-color  rounded-5 px-4 py-2 "
                onClick={() => handleReserve(jetShow.id)}
              >
                <span className="me-3 text-light">
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
      )}
    </>
  );
}

export default AeroPlaneDetails;
