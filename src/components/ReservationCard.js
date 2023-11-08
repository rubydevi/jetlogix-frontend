import React from 'react';
import PropTypes from 'prop-types';

const ReservationCard = ({
  aeroplane,
}) => (
  <div className="card mb-3" style={{ maxWidth: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">Reservation Details</h5>
      <p className="card-text">
        <strong>Reserved Date:</strong>
        {' '}
        {aeroplane.reserved_date}
      </p>
      <p className="card-text">
        <strong>Start Time:</strong>
        {' '}
        {aeroplane.start_time}
      </p>
      <p className="card-text">
        <strong>End Time:</strong>
        {' '}
        {aeroplane.end_time}
      </p>
      <p className="card-text">
        <strong>Start Location:</strong>
        {' '}
        {aeroplane.start_location}
      </p>
      <p className="card-text">
        <strong>Destination:</strong>
        {' '}
        {aeroplane.destination}
      </p>
    </div>
  </div>
);

ReservationCard.propTypes = {
  aeroplane: PropTypes.shape({
    reserved_date: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    start_location: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default ReservationCard;
