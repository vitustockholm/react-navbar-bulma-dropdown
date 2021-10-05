import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Counter = ({ render }) => {
  const [count, setCount] = useState(0);

  const increment = (e, num = 1) => setCount((prev) => prev + num);

  return render(count, increment);
};

Counter.propTypes = {
  render: PropTypes.func.isRequired,
};

export default Counter;
