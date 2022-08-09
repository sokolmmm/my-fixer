/* eslint-disable react/prop-types */
import React from 'react';
import styles from './GreenButton.module.scss';

function GreenButton({ textBody, disabled }) {
  return (
    <button type="submit" className={styles.button} disabled={disabled}>
      {textBody}
    </button>
  );
}

export default GreenButton;
