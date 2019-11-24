import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import DeleteButton from '../../containers/DeleteButton';
import EditButton from '../../containers/EditButton';
import Checkbox from '../../containers/Checkbox';
import TextArea from '../TextArea';

const ListItem = ({
  description, id, index, editing, complete
}) => {
  const [newDescription, setDescription] = useState(description);

  const onChange = ({ target: { value: newDescription } }) => {
    setDescription(newDescription);
  };

  return (
    <li className={`${styles.listItem} ${styles[`listItemNth${index % 5}`]}`}>
      {editing
        ? (
          <TextArea
            onChange={onChange}
            value={newDescription}
          />
        )
        : <span className={`${styles.description} ${complete ? styles.complete : ''}`}>{description}</span>}
      <div className={styles.actions}>
        <Checkbox id={id} complete={complete} />
        <EditButton id={id} description={newDescription} editing={editing} />
        <DeleteButton id={id} />
      </div>
    </li>
  );
};

ListItem.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.symbol.isRequired,
  index: PropTypes.number.isRequired,
  editing: PropTypes.bool.isRequired,
  complete: PropTypes.bool.isRequired
};

export default ListItem;
