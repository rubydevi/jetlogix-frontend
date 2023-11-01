import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/app-logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? 'bg-light border-right' : 'd-none'} id="sidebar-wrapper">
      <div className="sidebar-heading">
        <img alt="Logo" src={logo} className="img-fluid" style={{ width: '150px' }} />
      </div>
      <div className="list-group list-group-flush">
        <NavLink exact to="/" className="list-group-item list-group-item-action" onClick={toggleMenu}>Home</NavLink>
        <NavLink to="/reservations" className="list-group-item list-group-item-action" onClick={toggleMenu}>Reservations</NavLink>
        <NavLink to="/aeroplane" className="list-group-item list-group-item-action" onClick={toggleMenu}>Aeroplane</NavLink>
      </div>
    </div>
  );
};

export default Navigation;
