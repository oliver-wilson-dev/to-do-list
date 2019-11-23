import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const AddNewToDo = ({ addToDo }) => {
  const [description, setDescription] = useState('');

  const onInput = ({ target: { value: newDescription } }) => {
    setDescription(newDescription);
  };

  const onClick = () => {
    addToDo({ description });
    setDescription('');
  };

  return (
    <div className={styles.addNewToDo}>
      <h2 className={styles.title}>Add a new todo</h2>
      <div className={styles.todoDetails}>
        <textarea className={styles.textArea} placeholder="Start typing..." maxLength={50} onChange={onInput} value={description} />
        <button
          className={styles.button}
          onClick={onClick}
          type="button"
        >
          <span role="img" aria-label="add a new todo">+</span>
        </button>
      </div>
    </div>
  );
};

AddNewToDo.propTypes = {
  addToDo: PropTypes.func.isRequired
};

export default AddNewToDo;
