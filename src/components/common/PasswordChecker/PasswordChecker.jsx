/* eslint-disable react/prop-types */
import React from 'react';

import styles from './PasswordChecker.module.scss';
import passwordRegEx from '../../../helpers/constants/passwordRegEx';

function PasswordChecker(props) {
  const { value, condition } = props;

  const [reliability, setReliability] = React.useState('gray');

  React.useEffect(() => {
    if (condition) {
      setReliability('weak');
    }

    if (passwordRegEx.medium.test(value)) {
      setReliability('medium');
    }

    if (passwordRegEx.strong.test(value)) {
      setReliability('strong');
    }
  }, [value, reliability, condition]);
  return (
    <div className={styles.passwordChecker}>
      { condition ? (
        <>
          <span className={styles[reliability]}> </span>
          <span className={reliability === 'medium' || reliability === 'strong' ? styles[reliability] : null}> </span>
          <span className={reliability === 'strong' ? styles[reliability] : null}> </span>
        </>
      ) : null}

    </div>
  );
}

export default PasswordChecker;
