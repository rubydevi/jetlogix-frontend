import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createReservation } from '../redux/reservations/reservationSlice';

export default function Reserve() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const aeroplanesData = useSelector((state) => state.aeroplanes.aeroplanes);
  const { reservedJet } = useSelector((state) => state.aeroplanes);
  const userData = JSON.parse(localStorage.getItem('Token')) || {};

  const [data, setData] = useState({
    username: '',
    planeName: '',
    startLocation: '',
    endLocation: '',
    startTime: '',
    endTime: '',
    reserveDate: '',
    name: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      reservation: {
        name: reservedJet.name || data.name,
        reserved_date: data.reserveDate,
        start_time: data.startTime,
        end_time: data.endTime,
        start_location: reservedJet.location || data.startLocation,
        destination: data.endLocation,
        user_id: userData.id,
        aeroplane_id: reservedJet.id || data.planeName,
      },
    };
    dispatch(createReservation(formData));
    setData({
      username: '',
      planeName: '',
      startLocation: '',
      endLocation: '',
      startTime: '',
      endTime: '',
      reserveDate: '',
      name: '',
    });

    navigate('/reservations');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex w-100  justify-content-center align-items-center">
        <h2 className="text-center ">
          You Can
          {' '}
          <span className="text-color">Reserve Now</span>
        </h2>
      </div>
      <div className="container">
        <div className="row d-flex flex-column flex-md-row gap-0 w-100  py-1">
          <div className="col ">
            <div className=" col col-md-8">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-control border-color"
                defaultValue={userData.username}
              />
            </div>
            <div className=" col col-md-8">
              <label htmlFor="planename" className="form-label">
                Plane Model:
              </label>
              <select
                className="form-select border-color"
                value={data.planeName}
                id="planename"
                aria-label="Default select example"
                onChange={(e) => setData({
                  ...data,
                  planeName: e.target.value,
                })}
              >
                <option defaultValue>
                  {reservedJet.id ? reservedJet.model : 'Select plane model'}
                </option>
                {aeroplanesData?.aeroplanes?.map((plane) => (
                  <option key={plane.id} value={plane.id}>
                    {plane.model}
                  </option>
                ))}
              </select>
            </div>
            <div className=" col col-md-8">
              <label htmlFor="planename" className="form-label">
                Plane Name:
              </label>
              <select
                className="form-select border-color"
                value={data.name}
                id="planename"
                aria-label="Default select example"
                onChange={(e) => setData({
                  ...data,
                  name: e.target.value,
                })}
              >
                <option defaultValue>
                  {reservedJet.id ? reservedJet.name : 'Select plane menu'}
                </option>
                {aeroplanesData?.aeroplanes?.map((plane) => (
                  <option key={plane.id} value={plane.name}>
                    {plane.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col col-md-8">
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
                className="form-control border-color"
                id="startLocation"
              />
            </div>
          </div>
          <div className="col">
            <div className="col col-md-8">
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
                className="form-control border-color"
                id="destination"
              />
            </div>
            <div className="col col-md-8">
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
                className="form-control border-color"
                id="start-date"
              />
            </div>
            <div className="col col-md-8">
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
                className="form-control border-color"
                id="end-date"
              />
            </div>
            <div className="col col-md-8">
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
                className="form-control border-color"
                id="reserved-date"
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-color text-light px-4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
