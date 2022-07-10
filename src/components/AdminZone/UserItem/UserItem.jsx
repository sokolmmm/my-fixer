/* eslint-disable react/prop-types */
import React from 'react';
import styles from './UserItem.module.scss';

function UserItem(props) {
  const {
    firstName, lastName, location, status, rating, email,
  } = props;

  return (
    <ul className={styles.userItem}>
      <li>{firstName}</li>
      <li>{lastName}</li>
      <li>{location}</li>
      <li>{status}</li>
      <li>{rating}</li>
      <li>{email}</li>
    </ul>
  );
}

export default UserItem;
