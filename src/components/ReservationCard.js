import React from 'react';
import PropTypes from 'prop-types';
import {
  CustomCard, CardContent,
  CardTitle,
  CardText,
} from './styledcomponents/ReservationStyles';

const ReservationCard = ({ aeroplane }) => (
  <div className="row">
    <div className="col-md-6">
      <CustomCard className="card">
        <div className="card-body">
          <CardTitle className="card-title">Reservation Details</CardTitle>
          <CardContent>
            <CardText className="card-text">
              <div>
                <strong>Name:</strong>
                {' '}
                <small>{aeroplane.name}</small>
              </div>
            </CardText>
            <CardText className="card-text">
              <div>
                <strong>Date:</strong>
                {' '}
                <small>{aeroplane.reserved_date}</small>
              </div>
            </CardText>
            <CardText className="card-text">
              <div>
                <strong>Start Time:</strong>
                {' '}
                <small>{aeroplane.start_time}</small>
              </div>
            </CardText>
            <CardText className="card-text">
              <div>
                <strong>End Time:</strong>
                {' '}
                <small>{aeroplane.end_time}</small>
              </div>
            </CardText>
            <CardText className="card-text">
              <div>
                <strong>Start Location:</strong>
                {' '}
                <small>{aeroplane.start_location}</small>
              </div>
            </CardText>
            <CardText className="card-text">
              <div>
                <strong>Destination:</strong>
                {' '}
                <small>{aeroplane.destination}</small>
              </div>
            </CardText>
          </CardContent>
        </div>
      </CustomCard>
    </div>
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
