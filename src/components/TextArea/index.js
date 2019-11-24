import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const TextArea = ({ onChange, value, additionalStyles }) => (
  <textarea
    className={`${styles.textArea} ${additionalStyles || ''}`}
    placeholder="Start typing..."
    maxLength={50}
    onChange={onChange}
    value={value}
  />
);

TextArea.propTypes = {
  additionalStyles: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default TextArea;
