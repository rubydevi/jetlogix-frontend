import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent,
  CardTitle,
  CardText,
} from './styledcomponents/ReservationStyles';

const ReservationCard = ({ aeroplane }) => (
  <div>
    <Card>
      <div className="card-body">
        <CardTitle>Reservation Details</CardTitle>
        <CardContent>
          <CardText>
            <strong>Name:</strong>
            {' '}
            {aeroplane.name}
          </CardText>
          <CardText>
            <strong>Date:</strong>
            {' '}
            {aeroplane.reserved_date}
          </CardText>
          <CardText>
            <strong>Start Time:</strong>
            {' '}
            {aeroplane.start_time}
          </CardText>
          <CardText>
            <strong>End Time:</strong>
            {' '}
            {aeroplane.end_time}
          </CardText>
          <CardText>
            <strong>Start Location:</strong>
            {' '}
            {aeroplane.start_location}
          </CardText>
          <CardText>
            <strong>Destination:</strong>
            {' '}
            {aeroplane.destination}
          </CardText>
        </CardContent>
      </div>
    </Card>
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
