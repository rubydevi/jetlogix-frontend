import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/app-logo.png';

function NavBarMobile() {
  const { authToken } = JSON.parse(localStorage.getItem('Token')) || {};
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
            exact
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
                  exact
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
            </ul>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBarMobile;
