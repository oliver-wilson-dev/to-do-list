import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const TextArea = ({
  onChange, value, additionalStyles, reference
}) => {
  React.useEffect(() => {
    reference.current.focus();
  }, []);

  return (
    <textarea
      className={`${styles.textArea} ${additionalStyles || ''}`}
      placeholder="Start typing..."
      maxLength={50}
      onChange={onChange}
      value={value}
      ref={reference}
    />
  );
};

TextArea.propTypes = {
  additionalStyles: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ]).isRequired
};

export default TextArea;
