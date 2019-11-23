import React from 'react';
import PropTypes from 'prop-types';

const Count = ({ count }) => <h1>Clicked {count} times.</h1>;

Count.propTypes = {
  count: PropTypes.number.isRequired
};

export default Count;
