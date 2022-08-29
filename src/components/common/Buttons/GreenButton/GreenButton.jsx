/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */

import React from 'react';
import styles from './GreenButton.module.scss';

function GreenButton(props) {
  const {
    textBody, disabled, onButtonClick, values,
  } = props;
  return (
    <button
      className={styles.button}
      disabled={disabled}
      type="button"
      onClick={() => onButtonClick(values)}
    >
      {textBody}
    </button>
  );
}

export default GreenButton;
