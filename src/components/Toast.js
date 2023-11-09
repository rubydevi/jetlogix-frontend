import React from 'react';
import { BiAlarm } from 'react-icons/bi';
import PropTypes from 'prop-types';

const Toast = ({ error }) => (
  <div className="toast-container position-fixed top-0 end-0 p-3">
    <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
        <div className="float-sm-start">
          <BiAlarm size={20} className="me-2" />
          <i className="bi bi-react me-2" />
        </div>
        <strong className="me-auto">Alert</strong>
        <div className="float-sm-end">
          <button
            type="button"
            className="btn-close me-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
            id="toastClose"
          />
        </div>
      </div>
      <div className="toast-body">{error}</div>
    </div>
  </div>
);

Toast.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Toast;
