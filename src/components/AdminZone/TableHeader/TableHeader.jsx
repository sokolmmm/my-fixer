/* eslint-disable react/prop-types */
import React from 'react';
import styles from './TableHeader.module.scss';

function TableHeader() {
  return (
    <header>
      <ul className={styles.tableHeader}>
        <li>First Name</li>
        <li>Last Name</li>
        <li>Country</li>
        <li>Status</li>
        <li>Level</li>
        <li>E-mail</li>
      </ul>
    </header>
  );
}

export default TableHeader;
