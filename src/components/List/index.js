import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import ListItem from '../ListItem';

const List = ({ tasks }) => (
  <ul className={styles.list}>{
      tasks.map(({
        description, id, editing, complete
      }, index) => (
        <ListItem
          key={`${index}: ${description}`} /* eslint-disable-line */
          id={id}
          description={description}
          index={index}
          editing={editing}
          complete={complete}
        />
      ))
    }
  </ul>
);

List.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default List;
