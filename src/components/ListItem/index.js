import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import DeleteButton from '../../containers/DeleteButton';

const ListItem = ({ description, id, index }) => (
  <li className={`${styles.listItem} ${styles[`listItemNth${index % 5}`]}`}>
    <span>{description}</span>
    <DeleteButton id={id} />
  </li>
);

ListItem.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.symbol.isRequired,
  index: PropTypes.number.isRequired
};

export default ListItem;
