import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ errorMessage }) => (errorMessage ? <div className="error-msg">{errorMessage}</div> : null);

Error.propTypes = {
  errorMessage: PropTypes.string,
};

Error.defaultProps = {
  errorMessage: null,
};

export default Error;
