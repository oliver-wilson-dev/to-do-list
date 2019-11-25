import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const EditButton = ({
  setEditState, id, editing, description
}) => {
  const onClick = () => setEditState({ id, editState: !editing, description });

  return (
    <Button onClick={onClick}>
      {editing
        ? <span role="img" aria-label="apply changes">✅</span>
        : <span role="img" aria-label="edit this task">✏️</span>
      }
    </Button>
  );
};

EditButton.propTypes = {
  setEditState: PropTypes.func.isRequired,
  id: PropTypes.symbol.isRequired,
  editing: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired
};

export default EditButton;
