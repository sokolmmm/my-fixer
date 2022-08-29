/* eslint-disable react/prop-types */

import React from 'react';
import styles from './SubmitButton.module.scss';

function SubmitButton(props) {
  const { textBody, disabled } = props;
  return (
    <button className={styles.button} disabled={disabled} type="submit">
      {textBody}
    </button>
  );
}

export default SubmitButton;
