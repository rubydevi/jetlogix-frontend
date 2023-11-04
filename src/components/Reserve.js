import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createReservation } from '../redux/reservations/reservationSlice';

export default function Reserve() {
  const dispatch = useDispatch();
  const aeroplanesData = useSelector((state) => state.aeroplanes.aeroplanes);
  const { reservedJet } = useSelector((state) => state.aeroplanes);

  const userData = JSON.parse(localStorage.getItem('Token')) || {};
  const [data, setData] = useState({
    username: '',
    planeName: '',
    totalCost: '',
    startLocation: '',
    endLocation: '',
    startDate: '',
    endDate: '',
    reserveDate: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      reservation: {
        reserved_date: data.reserveDate,
        start_time: data.startDate,
        end_time: data.endDate,
        total_cost: data.totalCost,
        start_location: data.startLocation,
        destination: data.endLocation,
        user_id: userData.id,
        aeroplane_id: reservedJet.id || data.planeName,
      },
    };
    dispatch(createReservation(formData));
    setData({
      username: '',
      planeName: '',
      totalCost: '',
      startLocation: '',
      endLocation: '',
      startDate: '',
      endDate: '',
      reserveDate: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container mt-5">
        <div className="row gap-0">
          <div className="col">
            <div className=" col-8">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={userData.username}
                onChange={(e) => setData({
                  ...data,
                  username: e.target.value,
                })}
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
                <option selected>
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
              <label htmlFor="cost" className="form-label">
                Price Per Person
              </label>
              <input
                value={data.totalCost}
                onChange={(e) => setData({
                  ...data,
                  totalCost: e.target.value,
                })}
                type="number"
                className="form-control"
                id="cost"
              />
            </div>
            <div className=" col-8">
              <label htmlFor="startLocation" className="form-label">
                From Departure
              </label>
              <input
                value={data.startLocation}
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
                Departure Date select
              </label>
              <input
                value={data.startDate}
                onChange={(e) => setData({
                  ...data,
                  startDate: e.target.value,
                })}
                type="date"
                className="form-control"
                id="start-date"
              />
            </div>
            <div className=" col-8">
              <label htmlFor="end-date" className="form-label">
                Return Date select
              </label>
              <input
                value={data.endDate}
                onChange={(e) => setData({
                  ...data,
                  endDate: e.target.value,
                })}
                type="date"
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
  );
}
