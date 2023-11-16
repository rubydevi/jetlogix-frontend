import React from 'react';
import PropTypes from 'prop-types';

import {
  CustomCard,
  CardContent,
  CardTitle,
  CardText,
} from './styledcomponents/ReservationStyles';

const ReservationCard = ({ aeroplane }) => (
  <div className="col-lg-6 mb-4">
    <CustomCard className="card">
      <CardTitle className="card-title">Reservation Details</CardTitle>
      <CardContent>
        <CardText className="card-text">
          <span>
            <strong>Name:</strong>
            {' '}
            <small>{aeroplane.name}</small>
          </span>
        </CardText>
        <CardText className="card-text">
          <span>
            <strong>Date:</strong>
            {' '}
            <small>{aeroplane.reserved_date}</small>
          </span>
        </CardText>
        <CardText className="card-text">
          <span>
            <strong>Start Time:</strong>
            {' '}
            <small>{aeroplane.start_time}</small>
          </span>
        </CardText>
        <CardText className="card-text">
          <span>
            <strong>End Time:</strong>
            {' '}
            <small>{aeroplane.end_time}</small>
          </span>
        </CardText>
        <CardText className="card-text">
          <span>
            <strong>Start Location:</strong>
            {' '}
            <small>{aeroplane.start_location}</small>
          </span>
        </CardText>
        <CardText className="card-text">
          <span>
            <strong>Destination:</strong>
            {' '}
            <small>{aeroplane.destination}</small>
          </span>
        </CardText>
      </CardContent>
    </CustomCard>
  </div>
);

ReservationCard.propTypes = {
  aeroplane: PropTypes.shape({
    name: PropTypes.string.isRequired,
    reserved_date: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    start_location: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default ReservationCard;
