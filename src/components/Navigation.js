import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTwitter, FaFacebook, FaGooglePlus, FaPinterest, FaVimeo,
} from 'react-icons/fa';
import { useNavigation } from './NavigationContext';
import logo from '../assets/app-logo.png';

const Navigation = () => {
  const { isOpen } = useNavigation();
  const [isMobile, setIsMobile] = useState(false);

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
      className={`position-fixed vh-100 bg-light border-end d-flex flex-column ${(isOpen && isMobile) ? 'w-50' : 'w-0'}`}
      id="sidebar-wrapper"
    >
      <div className="sidebar-heading">
        <img alt="Logo" src={logo} className="img-fluid" style={{ width: '150px' }} />
      </div>
      <div className="list-group list-group-flush flex-grow-1">
        <NavLink exact to="/" className="list-group-item list-group-item-action">
          Home
        </NavLink>
        <NavLink to="/aeroplanes" className="list-group-item list-group-item-action">
          Private Planes
        </NavLink>
        <NavLink to="/reserve" className="list-group-item list-group-item-action">
          Reserve
        </NavLink>
        <NavLink to="/reservations" className="list-group-item list-group-item-action">
          My Reservations
        </NavLink>
        <NavLink to="/add_aeroplane" className="list-group-item list-group-item-action">
          Add Aeroplane
        </NavLink>
        <NavLink to="/delete_aeroplane" className="list-group-item list-group-item-action">
          Delete Aeroplane
        </NavLink>
        <div className="mt-auto">
          <div className="footer-icons d-flex justify-content-around mt-auto">
            <FaTwitter className="mx-2" />
            <FaFacebook className="mx-2" />
            <FaGooglePlus className="mx-2" />
            <FaPinterest className="mx-2" />
            <FaVimeo className="mx-2" />
          </div>
          <p>@2023 JetLogix</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
