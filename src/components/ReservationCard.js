import React from 'react';
import PropTypes from 'prop-types';

const ReservationCard = ({
  reservedDate, startTime, endTime, startLocation, destination,
}) => (
  <div className="card mb-3" style={{ maxWidth: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">Reservation Details</h5>
      <p className="card-text">
        <strong>Reserved Date:</strong>
        {' '}
        {reservedDate}
      </p>
      <p className="card-text">
        <strong>Start Time:</strong>
        {' '}
        {startTime}
      </p>
      <p className="card-text">
        <strong>End Time:</strong>
        {' '}
        {endTime}
      </p>
      <p className="card-text">
        <strong>Start Location:</strong>
        {' '}
        {startLocation}
      </p>
      <p className="card-text">
        <strong>Destination:</strong>
        {' '}
        {destination}
      </p>
    </div>
  </div>
);

ReservationCard.propTypes = {
  reservedDate: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  startLocation: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default ReservationCard;
