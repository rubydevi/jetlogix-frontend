import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  width: 450px;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
  font-size: 1rem;
`;

const CardText = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;
  font-size: 0.9rem;
  border-bottom: 1px solid #ccc; /* Added border line */
  padding-bottom: 5px; /* Added padding to separate lines visually */
`;

const ReservationCard = ({ aeroplane }) => (
  <div className="card mb-3" style={{ maxWidth: '200rem' }}>
    <Card>
      <div className="card-body">
        <CardTitle>Reservation Details</CardTitle>
        <CardContent>
          <CardText>
            <strong>Name:</strong>
            {' '}
            {aeroplane.reservation_name}
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
    reservation_name: PropTypes.string.isRequired,
    reserved_date: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    start_location: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default ReservationCard;
