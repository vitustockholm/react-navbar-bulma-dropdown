import PropTypes from 'prop-types';

// Styles
import { ListItem } from './User.style';

import React from 'react';

const User = ({ name, userID, action }) => {
  return (
    <ListItem onClick={action} data-id={userID}>
      {name}
    </ListItem>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  userID: PropTypes.number,
  action: PropTypes.func,
};

export default User;
