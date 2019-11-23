import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const Button = ({ incrementCount }) => (
  <button className={styles.button} onClick={incrementCount} type="button">Click me!</button>
);

Button.propTypes = {
  incrementCount: PropTypes.func.isRequired
};

export default Button;
