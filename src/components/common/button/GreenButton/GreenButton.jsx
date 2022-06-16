/* eslint-disable react/prop-types */
import React from 'react';
import styles from './GreenButton.module.scss';

function GreenButton({ textBody }) {
  return (
    <button type="submit" className={styles.button}>{textBody}</button>
  );
}

export default GreenButton;
