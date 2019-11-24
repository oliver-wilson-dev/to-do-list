import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import Button from '../Button';
import TextArea from '../TextArea';


const AddNewToDo = ({ addToDo }) => {
  const [description, setDescription] = useState('');

  const onChange = ({ target: { value: newDescription } }) => {
    setDescription(newDescription);
  };

  const onClick = () => {
    addToDo({ description });
    setDescription('');
  };

  return (
    <div className={styles.addNewToDo}>
      <h2 className={styles.title}>Add a new task</h2>
      <div className={styles.todoDetails}>
        <TextArea additionalStyles={styles.textArea} onChange={onChange} value={description} />
        <Button
          additionalStyles={styles.button}
          onClick={onClick}
        >
          <span role="img" aria-label="add a new todo">+</span>
        </Button>
      </div>
    </div>
  );
};

AddNewToDo.propTypes = {
  addToDo: PropTypes.func.isRequired
};

export default AddNewToDo;
