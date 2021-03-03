import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ button }) {
  return <input type="button" value={button} />;
}

Button.propTypes = {
  button: PropTypes.string.isRequired,
};
