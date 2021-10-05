import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

const Button = forwardRef(({ action, text }, ref) => {
  return (
    <button onClick={action} ref={ref}>
      {text}
    </button>
  );
});

Button.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
