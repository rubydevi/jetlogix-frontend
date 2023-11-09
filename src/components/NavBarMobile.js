import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';
import logo from '../assets/app-logo.png';

const NavBarMobile = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const { authToken } = JSON.parse(localStorage.getItem('Token')) || {};
  const handleLogout = () => {
    setAuth({});
    localStorage.removeItem('Token');
    const url = '/logout';
    if (authToken) {
      try {
        axios.delete(url, {
          headers: {
            Authorization: authToken,
            'Content-Type': 'application/json',
          },
        });
      } catch (err) {
        throw Error(err);
      }
    }
    navigate('/login');
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container w-100 d-flex justify-content-between align-items-center">
        <button
          className="navbar-toggler pb-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="sidebar-heading">
          <NavLink
            to="/"
            className="list-group-item navbar-brand list-group-item-action "
          >
            <img
              alt="Logo"
              src={logo}
              className="img-fluid"
              style={{ width: '80px' }}
            />
          </NavLink>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          {authToken ? (
            <ul className="navbar-nav ">
              <li className="nav-item" id="navbarNav-list-1">
                <NavLink
                  to="/"
                  className="list-group-item nav-link list-group-item-action "
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/aeroplanes"
                  className="list-group-item list-group-item-action nav-link"
                >
                  Private Planes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/reserve"
                  className="list-group-item list-group-item-action nav-link"
                >
                  Reserve
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/reservations"
                  className="list-group-item list-group-item-action nav-link"
                >
                  My Reservations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/add_aeroplane"
                  className="list-group-item list-group-item-action nav-link"
                >
                  Add Aeroplane
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/delete_aeroplane"
                  className="list-group-item list-group-item-action nav-link"
                >
                  Delete Aeroplane
                </NavLink>
              </li>
              <li>
                <button
                  disabled={!authToken}
                  onClick={handleLogout}
                  type="button"
                  className="list-group-item list-group-item-action "
                >
                  Log Out
                </button>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBarMobile;
