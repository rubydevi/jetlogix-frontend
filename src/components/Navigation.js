import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useNavigation } from './NavigationContext';
import logo from '../assets/app-logo.png';
import NavFooter from './NavFooter';
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';

const Navigation = () => {
  const { setAuth } = useAuth();
  const { isOpen } = useNavigation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
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

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div
      className={`position-absolute top-0 start-0 vh-100 bg-light border-end d-flex flex-column ${
        isOpen && isMobile ? 'w-50' : 'w-0'
      }`}
      id="sidebar-wrapper"
    >
      <div className="sidebar-heading">
        <img
          alt="Logo"
          src={logo}
          className="img-fluid"
          style={{ width: '150px' }}
        />
      </div>
      <div className="list-group list-group-flush flex-grow-1">
        <NavLink
          to="/"
          className="list-group-item list-group-item-action"
        >
          Private Planes
        </NavLink>
        <NavLink
          to="/reserve"
          className="list-group-item list-group-item-action"
        >
          Reserve
        </NavLink>
        <NavLink
          to="/reservations"
          className="list-group-item list-group-item-action"
        >
          My Reservations
        </NavLink>
        <NavLink
          to="/add_aeroplane"
          className="list-group-item list-group-item-action"
        >
          Add Aeroplane
        </NavLink>
        <NavLink
          to="/delete_aeroplane"
          className="list-group-item list-group-item-action"
        >
          Delete Aeroplane
        </NavLink>
        <button
          disabled={!authToken}
          onClick={handleLogout}
          type="button"
          className="list-group-item list-group-item-action "
        >
          Log Out
        </button>
        <NavFooter />
      </div>
    </div>
  );
};

export default Navigation;
