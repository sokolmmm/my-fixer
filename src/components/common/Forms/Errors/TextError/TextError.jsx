/* eslint-disable react/prop-types */
import React from 'react';
import styles from './TextError.module.scss';

function TextError({ children }) {
  return (
    <div className={styles.error}>
      {children}
    </div>
  );
}

export default TextError;
