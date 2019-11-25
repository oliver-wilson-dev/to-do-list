import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import Button from '../Button';
import TextArea from '../TextArea';


const AddNewTask = ({ addTask }) => {
  const [description, setDescription] = React.useState('');

  const ref = React.useRef(null);

  const onChange = ({ target: { value: newDescription } }) => {
    setDescription(newDescription);
  };

  const onClick = () => {
    addTask({ description });
    setDescription('');
  };

  return (
    <div className={styles.addNewTask}>
      <h2 className={styles.title}>Add a new task</h2>
      <div className={styles.taskDetails}>
        <TextArea
          additionalStyles={styles.textArea}
          onChange={onChange}
          value={description}
          reference={ref}
        />
        <Button
          additionalStyles={styles.button}
          onClick={onClick}
        >
          <span role="img" aria-label="add a new task">+</span>
        </Button>
      </div>
    </div>
  );
};

AddNewTask.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default AddNewTask;
