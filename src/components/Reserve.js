import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createReservation } from '../redux/reservations/reservationSlice';

export default function Reserve() {
  const dispatch = useDispatch();
  const aeroplanesData = useSelector((state) => state.aeroplanes.aeroplanes);
  const { reservedJet } = useSelector((state) => state.aeroplanes);
  const userData = JSON.parse(localStorage.getItem('Token')) || {};
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: '',
    planeName: '',
    startLocation: '',
    endLocation: '',
    startTime: '',
    endTime: '',
    reserveDate: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      reservation: {
        reserved_date: data.reserveDate,
        start_time: data.startTime,
        end_time: data.endTime,
        start_location: reservedJet.location,
        destination: data.endLocation,
        user_id: userData.id,
        aeroplane_id: reservedJet.id || data.planeName,
      },
    };
    dispatch(createReservation(formData));
    // history.push('/reservations');
    navigate('/reservations');
    setData({
      username: '',
      planeName: '',
      startLocation: '',
      endLocation: '',
      startTime: '',
      endTime: '',
      reserveDate: '',
    });
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <div className="container mt-5">
          <div className="row gap-0">
            <div className="col">
              <div className=" col-8">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  defaultValue={userData.username}
                />
              </div>
              <div className=" col-8">
                <label htmlFor="planename" className="form-label">
                  Plane Name:
                </label>
                <select
                  className="form-select"
                  value={data.planeName}
                  id="planename"
                  aria-label="Default select example"
                  onChange={(e) => setData({
                    ...data,
                    planeName: e.target.value,
                  })}
                >
                  <option defaultValue>
                    {reservedJet.id ? reservedJet.name : 'Select menu plane'}
                  </option>
                  {aeroplanesData?.aeroplanes?.map((plane) => (
                    <option key={plane.id} value={plane.id}>
                      {plane.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className=" col-8">
                <label htmlFor="startLocation" className="form-label">
                  From Departure
                </label>
                <input
                  defaultValue={
                    reservedJet.id ? reservedJet.location : data.startLocation
                  }
                  onChange={(e) => setData({
                    ...data,
                    startLocation: e.target.value,
                  })}
                  type="text"
                  className="form-control"
                  id="startLocation"
                />
              </div>
            </div>
            <div className="col">
              <div className=" col-8">
                <label htmlFor="destination" className="form-label">
                  To Destination
                </label>
                <input
                  value={data.endLocation}
                  onChange={(e) => setData({
                    ...data,
                    endLocation: e.target.value,
                  })}
                  type="text"
                  className="form-control"
                  id="destination"
                />
              </div>
              <div className=" col-8">
                <label htmlFor="start-date" className="form-label">
                  Stat time select
                </label>
                <input
                  value={data.startTime}
                  onChange={(e) => setData({
                    ...data,
                    startTime: e.target.value,
                  })}
                  type="time"
                  className="form-control"
                  id="start-date"
                />
              </div>
              <div className=" col-8">
                <label htmlFor="end-date" className="form-label">
                  End time select
                </label>
                <input
                  value={data.endTime}
                  onChange={(e) => setData({
                    ...data,
                    endTime: e.target.value,
                  })}
                  type="time"
                  className="form-control"
                  id="end-date"
                />
              </div>
              <div className=" col-8">
                <label htmlFor="reserved-date" className="form-label">
                  Reserved Date select
                </label>
                <input
                  value={data.reserveDate}
                  onChange={(e) => setData({
                    ...data,
                    reserveDate: e.target.value,
                  })}
                  type="date"
                  className="form-control"
                  id="reserved-date"
                />
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary px-4">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>

    </div>
  );
}
