import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const Checkbox = ({ markComplete, id, complete }) => {
  const onChange = () => markComplete({ id });

  return (
    <input
      type="checkbox"
      className={styles.checkbox}
      checked={complete}
      onChange={onChange}
      aria-label={`mark this task as ${complete ? 'incomplete' : 'complete'}`}
    />
  );
};

Checkbox.propTypes = {
  markComplete: PropTypes.func.isRequired,
  id: PropTypes.symbol.isRequired,
  complete: PropTypes.bool.isRequired
};

export default Checkbox;
