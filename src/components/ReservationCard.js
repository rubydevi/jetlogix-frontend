import React from 'react';
import PropTypes from 'prop-types';
import {
  CustomCard, CardContent,
  CardTitle,
  CardText,
} from './styledcomponents/ReservationStyles';

const ReservationCard = ({ aeroplane }) => (
  <div>
    <CustomCard>
      <div className="card-body">
        <CardTitle>Reservation Details</CardTitle>
        <CardContent>
          <CardText>
            <div className="text-left"><strong>Name:</strong></div>
            {' '}
            <small>{aeroplane.name}</small>
          </CardText>
          <CardText>
            <div className="text-left"><strong>Date:</strong></div>
            {' '}
            <small>
              {' '}
              {aeroplane.reserved_date}
            </small>
          </CardText>
          <CardText>
            <strong>Start Time:</strong>
            {' '}
            <small>
              {' '}
              {aeroplane.start_time}
              {' '}
            </small>
          </CardText>
          <CardText>
            <strong>End Time:</strong>
            {' '}
            <small>
              {' '}
              {aeroplane.end_time}
              {' '}
            </small>
          </CardText>
          <CardText>
            <strong>Start Location:</strong>
            {' '}
            <small>
              {' '}
              {aeroplane.start_location}
            </small>
          </CardText>
          <CardText>
            <strong>Destination:</strong>
            {' '}
            <small>
              {' '}
              {aeroplane.destination}
            </small>
          </CardText>
        </CardContent>
      </div>
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
