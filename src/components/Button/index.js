import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const Button = ({
  onClick, children, additionalStyles
}) => (
  <button className={`${styles.button} ${additionalStyles || ''}`} onClick={onClick} type="button">
    {children}
  </button>
);

Button.propTypes = {
  additionalStyles: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Button;
