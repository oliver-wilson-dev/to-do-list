import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const DeleteButton = ({ removeToDo, id }) => {
  const onClick = () => removeToDo({ id });

  return (
    <Button onClick={onClick}>
      <span role="img" aria-label="remove this todo">❌</span>
    </Button>
  );
};

DeleteButton.propTypes = {
  removeToDo: PropTypes.func.isRequired,
  id: PropTypes.symbol.isRequired
};

export default DeleteButton;
