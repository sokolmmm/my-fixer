/* eslint-disable react/prop-types */
import React from 'react';

import { ErrorMessage } from 'formik';

import styles from './CombinedError.module.scss';

function CombinedError(props) {
  const { condition, name, serverError } = props;
  return (
    <div className={styles.combinedError}>
      {condition ? (
        <p>{serverError}</p>
      ) : (
        <ErrorMessage name={name} />
      )}
    </div>
  );
}

export default CombinedError;
