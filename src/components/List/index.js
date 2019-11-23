import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import ListItem from '../ListItem';

const List = ({ toDos }) => (
  <ul className={styles.list}>{
      toDos.map(({ description, id }, index) => (
        <ListItem
          key={description}
          id={id}
          description={description}
          index={index}
        />
      ))
    }
  </ul>
);

List.propTypes = {
  toDos: PropTypes.array.isRequired
};

export default List;
