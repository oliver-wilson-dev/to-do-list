import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const DeleteButton = ({ removeToDo, id }) => (
  <button className={styles.button} onClick={removeToDo.bind(undefined, { id })} type="button">
    <span role="img" aria-label="remove this todo">❌</span>
  </button>
);

DeleteButton.propTypes = {
  removeToDo: PropTypes.func.isRequired,
  id: PropTypes.symbol.isRequired
};

export default DeleteButton;
