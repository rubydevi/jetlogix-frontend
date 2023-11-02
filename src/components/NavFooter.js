import React from 'react';
import {
  FaTwitter, FaFacebook, FaGooglePlus, FaPinterest, FaVimeo,
} from 'react-icons/fa';

const NavFooter = () => (
  <div className="mt-auto">
    <div className="footer-icons d-flex justify-content-around mt-auto">
      <FaTwitter className="mx-2" />
      <FaFacebook className="mx-2" />
      <FaGooglePlus className="mx-2" />
      <FaPinterest className="mx-2" />
      <FaVimeo className="mx-2" />
    </div>
    <p className="text-muted small">@2023 JetLogix</p>
  </div>
);

export default NavFooter;
