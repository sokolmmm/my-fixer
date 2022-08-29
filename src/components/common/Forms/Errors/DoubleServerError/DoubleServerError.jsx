/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

import styles from './DoubleServerError.module.scss';

function DoubleServerError(props) {
  const { firstError, secondError } = props;
  return (
    <>
      {firstError || secondError ? (
        <p className={styles.doubleServerError}>
          {firstError}
          {' '}
          <br />
          {secondError}
        </p>
      ) : null}
    </>
  );
}

export default DoubleServerError;
